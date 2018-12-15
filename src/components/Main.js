import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	color: #ffffff;
	font-weight: 700;
	line-height: 50px;
	font-size: 40px;

	span {
		font-size: 24px;
		display: block;
		line-height: 30px;

	}
`

const LightText = styled.div`
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 50px;
`

const MainButton = styled.button`
	background-color: #ffa14b;
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
	border: none;
	border-radius: 30px;
	margin-top: 34px;
	padding: 15px 35px;
	transition: all 0.2s ease-in;
	&:hover {
		background-color: transparent;
		border: 1px solid #ffa14b;
	}
`

export default class Main extends React.Component {
	render() {
		return(
			<Row>
				<Col lg={5}>
					<Repair>Качественный ремонт <span>iphone за 35 минут и гарантия 1 год</span></Repair>
					<LightText>Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 рублей, с установкой в подарок!</LightText>
					<MainButton>Отправить заявку!</MainButton>
				</Col>
				<Col lg={6} lgOffset={1}>
					
				</Col>
			</Row>
		);
	}
}