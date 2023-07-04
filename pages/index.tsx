import Link from 'next/link';

const Index = () => (
  <div>
    <p>
      <a href="/team">Click about</a>
    </p>
    <p>
      <Link href="/about" as="/team">
        Click about
      </Link>
    </p>
    <Link href="/team">Click about</Link>
  </div>
);

export default Index;
