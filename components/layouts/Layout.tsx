import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui/Navbar';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }: Props) => {
  console.log(origin);
  return (
    <>
      <Head>
        <title> { title || 'Pokemon App'} </title>
        <meta name="author" content="Miguel Herrera" />
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content="https://import.cdn.thinkific.com/643563/courses/1875496/banner-220526-122428.png" />
      </Head>
      <Navbar />
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  );
};
