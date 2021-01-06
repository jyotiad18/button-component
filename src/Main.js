import React from 'react';
import { useLocation } from "react-router-dom";
import Button from './components/Button';
import Label from './Label';
import "./css/Main.css";

function Main() {
	let location = useLocation().pathname;
	location = location === '/' ? 'buttons' : location.substring(1);
	
	return (
		<div className="main">
			<h1>{location[0].toUpperCase().concat(location.substring(1))}</h1> 			
			<div className="main__grid-two">
				<div className="main__grid-group">
          			<Label text={`<Button />`} />
         			<Button>Default</Button>
				</div>
				<div className="main__grid-group">
          			<Label text={'&:hover, &:focus'} classType='light'/>				
					<Button hover={true}/>
				</div>
				<div className="main__grid-group">
          			<Label text='<Button variant=”outline” />' />				
					<Button variant={'outline'} />
				</div>
				<div className="main__grid-group">
          			<Label text={'&:hover, &:focus'} classType='light' />					
					<Button variant={'outline'} hover={true} />
				</div>
				<div className="main__grid-group">
          			<Label text='<Button variant="text” />' />				
					<Button variant={'text'} />
				</div>
				<div className="main__grid-group">
          			<Label text={'&:hover, &:focus'} classType='light' />					
					<Button variant={'text'} hover={true} />
				</div>
				<div className="main__grid-group">
          		    <Label text='<Button disabledShadow />' />						
					<Button disableShadow={true}/>
        		</div>				
			</div>	
			<div className="main__grid-two">				
				<div className="main__grid-group">
          		    <Label text='<Button disabled />' />						
					<Button disabled={true}/>
				</div>
				<div className="main__grid-group">
          		    <Label text='<Button variant=”text” disabled />' />					
					<Button variant={'text'} disabled={true} />
				</div>
				<div className="main__grid-group">
          		    <Label text='<Button startIcon=”local_grocery_store” />' />					
					<Button startIcon={'local_grocery_store'} color={'primary'}/>
				</div>
				<div className="main__grid-group">
          		    <Label text='<Button endIcon=”local_grocery_store” />' />					
					<Button endIcon={'local_grocery_store'} color={'primary'}/>
        		</div>
			</div>	
			<div className="main__grid-four">				
				<div className="main__grid-group">
          		   <Label text='<Button size=”sm” />' />					
					<Button size={'sm'} color={'primary'}/>
				</div>
				<div className="main__grid-group">
          		    <Label text='<Button size=”md” />' />
					<Button size={'md'} color={'primary'}/>
				</div>
				<div className="main__grid-group span2">
          		   <Label text='<Button size=”lg” />' />
					<Button size={'lg'} color={'primary'}/>
				</div>				
				<div className="main__grid-group">
          		   <Label text='<Button color=”default” />' />				
					<Button color={'default'}/>
				</div>
				<div className="main__grid-group">
          		   <Label text='<Button color=”primary” />' />	
					<Button  color={'primary'}/>
				</div>
				<div className="main__grid-group">
          		   <Label text='<Button color=”secondary” />' />	
					<Button  color={'secondary'}/>
				</div>
				<div className="main__grid-group">
          		   <Label text='<Button color=”danger” />' />	
					<Button color={'danger'}/>
				</div>
				<div className="main__grid-group">
					<Label text={'&:hover, &:focus'} classType='light' />	
					<Button color={'default'} hover={true}/>
				</div>
				<div className="main__grid-group">	
					<Label text={'&:hover, &:focus'} classType='light' />	
					<Button color={'primary'} hover={true} />
				</div>
				<div className="main__grid-group">	
					<Label text={'&:hover, &:focus'} classType='light' />	
					<Button color={'secondary'} hover={true} />
				</div>
				<div className="main__grid-group">		
					<Label text={'&:hover, &:focus'} classType='light' />	
					<Button color={'danger'} hover={true} />
				</div>
			</div>
			<div className="main__iconSrc">
				Icons: https://material.io/resources/icons/?style=round
			</div>
			<div className="main__footer">
				Jyoti ADHIKARI @ DevChallenges.io
			</div>
		</div>
	)
}

export default Main;
