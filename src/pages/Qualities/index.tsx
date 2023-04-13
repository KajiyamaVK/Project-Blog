import Card from '@/components/Cards';

export default function Qualities() {
  return (
    <div id="Qualities" className="flex flex-col">
      <h2 className="mt-20 text-green-100 after:block after:h-0.5 after:w-3/4 after:bg-green-100 md:after:w-1/4">
        Premissas de trabalho
      </h2>
      <div className="mx-auto flex max-w-5xl flex-wrap justify-evenly p-10">
        <Card title="Fácil" image="clean">
          Adepto das boas práticas do Clean Code, o código é sempre feito para
          programadores e nunca apenas para máquinas.
        </Card>
        <Card title="Organizado" image="solid">
          Adepto do SOLID, o código deve ser feito de uma maneira organizada e
          fácil de ser mantido.
        </Card>
        <Card title="Testado" image="tests">
          Testes automatizados antes de qualquer entrega para diminuir a chance
          de erros.
        </Card>
        <Card title="Keep on Learning" image="learn">
          A tecnologia não pára. Novas ferramentas surgem a todo momento. Para
          se manter relevante, o aprendizado contínuo não é opcional.
        </Card>
        <Card title="Stay Relevant" image="relevant">
          O ato da programação é apenas a ponta de um gigante iceberg. Negócios,
          planejamento, comunicação, etc. Tudo isso é necessário para que o
          PRODUTO exista.
        </Card>
      </div>
    </div>
  );
}
