import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const styles = {

}
class Oyente extends React.Component {
  
 
    render() {
        return(
            <div>
              <Grid container>
            <Grid item xs={5}>
          
</Grid>
                <Grid item xs={4}>
                
                <img class="card-img-top" src="https://i.imgur.com/9OeHzzV.jpg" alt="Card image cap" style={{width: '18rem'}}/>
                <h1>Sign Smiles</h1>
              <br/>
              <br/>
              <h1>Menu Oyente</h1>
				</Grid>
				<Grid item xs={3}/>
				
				</Grid>
<br/>
<br/>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Español
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"/>Ingles
  </label>
  
</div>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"><h1>Saludos</h1></th>
      <th scope="col"><h1>Verbos</h1></th>
          </tr>
  </thead>
 
</table>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"><h1>Numeros</h1></th>
      <th scope="col"><h1>Comida</h1></th>
          </tr>
  </thead>
  <tbody>
        
  </tbody>
</table>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="http://localhost:8380/home">Inicio</a></li>
    <li class="breadcrumb-item"><a href="http://localhost:8380/deaf">Menu Sordo</a></li>
    <li class="breadcrumb-item active" aria-current="page">Menu Oyente</li>
  </ol>
</nav>
            </div>
        )
    }
}

export default withStyles(styles)(Oyente)