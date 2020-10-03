import React, { useState, useEffect } from 'react'
import './Header.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';

interface Props{
	name?:string;
}
function Header(props:Props) {
	const [isOpen, setisOpen] = useState(false);
	const [isHidden,setisHidden]=useState(false);
	const [pos1,setpos1]=useState(window.pageYOffset);
	const [pos2,setpos2]=useState(window.pageYOffset);
	const onScroll=(()=>{
		if(isOpen)return;
		if(!isHidden&&window.pageYOffset-pos1>=100&&window.pageYOffset>=400){
			setisHidden(true);
			setpos1(window.pageYOffset);
			setpos2(window.pageYOffset);
		}else if(!isHidden){
			setpos1(Math.min(pos1,window.pageYOffset));
		}
		if(isHidden&&pos2-window.pageYOffset>=100){
			setisHidden(false);
			setpos1(window.pageYOffset);
			setpos2(window.pageYOffset);
		}else if(isHidden){
			setpos2(Math.max(pos2,window.pageYOffset));
		}
	})
	useEffect(()=>{
		document.addEventListener("scroll", onScroll);
    	return (): void => document.removeEventListener("scroll", onScroll);
	});
	return (
		<header className={(isHidden?"hidden":"tapu")}>
			<div className={"humburger " + (isOpen ? "active" : "inactive")}
				onClick={() => setisOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={"globalMenuSp" + " " + (isOpen ? "active" : "inactive")}>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/Algorithm">アルゴリズム班</a></li>
					<li><a href="/CG">CG班</a></li>
					<li><a href="/Security">セキュリティ班</a></li>
					<li><a href="/Paper">部誌</a></li>
					<li><a href="/Lecture">講演</a></li>
				</ul>
			</nav>
			<div className="title"><span>{props.name}</span>
			</div>
		</header>
	);
}
export default Header;