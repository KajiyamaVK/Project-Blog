import props from './interface';

export default function ListWithTitle(props: props) {
  return (
    <ul className="list-inside list-disc w-full md:w-2/5">
      <h2 className="mb-5 mt-10 leading-8 text-green-100 after:relative after:top-2 after:block after:h-0.5 after:w-full after:bg-green-100 lg:mt-3">
        {props.title}
      </h2>
      {props.list.map((item, index) => (
        <li key={index} className="text-green-100">
          {item}
        </li>
      ))}
    </ul>
  );
}
