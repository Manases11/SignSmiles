import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const styles = {
  
}
class SignUp extends React.Component {
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
<form>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputEmail4">Nombre</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Nombre"/>
    </div>
	<div class="form-group col-md-6">
      <label for="inputEmail4">Apellido</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Apellido"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Correo</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Direccion</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Ciudad</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Departamento</label>
      <select id="inputState" class="form-control">
        <option selected>Cortes</option>
        <option>Francisco Morazan</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Codigo Postal</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputEmail4">Edad</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Edad"/>
    </div>
	</div>
  <br/>
  
  
<div class="btn-group">
<label for="inputZip">Genero</label>
  <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Genero
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Masculino</a>
    <a class="dropdown-item" href="#">Femenino</a>
      </div>
</div>
<br/>
  <br/>
<div class="btn-group">
<label for="inputZip">Estado</label>
  <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Estado
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Sordo</a>
    <a class="dropdown-item" href="#">Oyente</a>
      </div>
</div>
<br/>
  <br/>
  <button type="button" class="btn btn-danger" ><a href="http://localhost:8380/login">Cancelar</a></button>

  
  <button type="submit" class="btn btn-primary" ><a href="http://localhost:8380/home">Registrarse</a></button>
</form>
            </div>
				


            
        )
    }
}

export default withStyles(styles)(SignUp)