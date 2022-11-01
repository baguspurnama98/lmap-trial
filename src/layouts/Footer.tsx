import React from "react"
import { Layout } from "antd"

import "./index.css";

const { Footer } = Layout

export const AppFooter: React.FC = () => {
	return (
		<Footer style={{ textAlign: 'center', backgroundColor:'#1D4279', color:'white' }}>Kandidat: Bagus Purnama (ODP IT 236)</Footer>
	)
}
