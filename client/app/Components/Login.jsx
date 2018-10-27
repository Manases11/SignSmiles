import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
const styles = {
root:{
	margin: "0 auto",
	marginTop:'10em'
},
inputs:{ 
	background:'Yellow',
	textAlign: "center",
	padding:'2em'
},
button:{ 
	margin:'1em'
}
}
class Login extends React.Component {
	state = {
		fields: [
			{
				field:'mail',
				label:'Correo',
				val:'',
				idI:0
			},
			{
				field:'pass',
				label:'Contraseña',
				val:'',
				idI:1
			}
		]
	}
	handleChange = (id) => event =>{
		let arrayField = this.state.fields
		arrayField[id].val = event.target.value
		this.setState({fields: arrayField})
	}
	render() {
			const { classes } = this.props
			const MappingTextfield = p => (
				<div key={p.val + p.idI}>
					<Typography variant="headline">
						{p.label}
					</Typography>
					<TextField
					id={p.field}
					label={p.label}
					className={classes.textField}
					value={p.val}
					onChange={this.handleChange(p.idI)}
				/>
			</div>
			)
        return(
			
            <div className={classes.root}>
			<div>
				<Grid container>
            <Grid item xs={5}/>
                <Grid item xs={4}>
                <img class="card-img-top" src="https://i.imgur.com/9OeHzzV.jpg" alt="Card image cap" style={{width: '18rem'}}/>
                <h1>Sign Smiles</h1>
				</Grid>
				<Grid item xs={3}/>
				
				</Grid>
                <br/>
                <br/>
			</div>
							<Grid container justify="center" alignItems="center">
								<Grid item xs={4} className={classes.inputs}>
									<Typography variant="display1">
										Iniciar Sesion 
									</Typography>
									{this.state.fields.map(MappingTextfield)}
									<Button variant="flat" className={classes.button} href="http://localhost:8380/home">
										Iniciar Sesion
									</Button>
									
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Iniciar con QR
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Codigo QR</h5>
		<p>1.Abre la aplicacion desde tu telefono </p>
		<br/>
		<p>2.Ingresa a configuracion o menu y selecciona codigo QR </p>
		<br/>
		<p>3.Cuando se active la camara apunta a la pantalla para escanear el codigo</p>
		<br/>
		
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  <img  src="https://imgur.com/WcTT2Oa.jpg" style={{width: '18rem'}}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
									<Button variant="flat" className={classes.button} href="http://localhost:8380/signup">
										Registrar
									</Button>
								</Grid>
							</Grid>
							<br/>
							<br/>
            </div>
        )
    }
}

export default withStyles(styles)(Login)