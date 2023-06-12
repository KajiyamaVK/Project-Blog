import { JSDOM } from 'jsdom';
import { IArticle } from '@/interfaces/IArticle';
import { NextApiRequest, NextApiResponse } from 'next';
import articlesNames from '@/Data/ArticlesNames';

export default async function Handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const result: IArticle[] = [];

  await Promise.all(
    articlesNames.map(async (articleName) => {
      const aticleUrl = `https://www.linkedin.com/pulse/${articleName}/`;
      const response = await fetch(aticleUrl);
      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;
      const title = document.querySelector('.pulse-title')?.textContent;
      const coverImage = document
        .querySelector('.cover-img__image')
        ?.getAttribute('src');

      let publishedAt = document.querySelector(
        '.base-main-card__metadata'
      )?.textContent;
      publishedAt = publishedAt?.replaceAll('\n', '').replaceAll('  ', '');

      if (!title || !coverImage || !publishedAt)
        return res.status(404).json({ message: 'Not Found' });

      const article: IArticle = {
        title: title,
        coverImage: coverImage,
        url: aticleUrl,
        publishedAt: publishedAt,
      };

      result.push(article);
    })
  );

  res.status(200).json(result);
}
