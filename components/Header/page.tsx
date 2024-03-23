import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { GlobalData } from '../../lib/types';
import styles from "./styles.module.scss"
import  "../../styles/globals.scss";
import logo from "../../public/images/dynamicDoodlesmithLogo.png";
import TagsRow from '../TagsRow/page';


export default function Header({name}:any) {
  return (<>
    <header className={styles.header}>
    
      <div className='flex justify-between'>
        <Logo />
        <ButtonGroup />
      </div>
      <TagsRow />
    </header>
    </>);
}

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.logoLink} >
        <Image src={logo} width={850} height={255} className='p-2' alt="site logo" />
      </Link>
    </div>
  );
}

const ButtonGroup = () => {
  return (
    <div className={styles.buttonGroup}>
      <Link href={"/"} className={styles.button}>Button 1</Link>
      <Link href={"/"} className={styles.button}>Button 2</Link>
    </div>
  );
}
