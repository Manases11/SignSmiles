import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
    body: {
        backgroundColor :'rgb( 27, 167, 231)' 
    },
    h1:{
        
        
    },
   
    button1:{
        fontsize: '16px',
border:' 2px solid rgb(227, 252, 2)',
backgroundColor:'yellow',
boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
color:'navy',
margin: '4px 2px',
padding: '15px 32px',
textAlign: 'center',
display: 'inlineBlock',
fontSize: '16px',
fontFamily: 'Franklin Gothic Medium Arial Narrow Arial, sans-serif;display: block',
marginLeft: 'auto',
marginRight: 'auto',
    },
    img: {
display: 'block',
marginLeft: 'auto',
marginRight: 'auto',
width: '50%',
width:"400",
height:"300",
borderRadius: '4px',
padding: '5px',
width: '250px',
}



}
class Home extends React.Component {
    render() {
        const { classes } =this.props;
        return(
            <div className= {classes.h1}>
            <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Sign Smiles</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Noticias</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Lenguaje
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Sordo</a>
          <a class="dropdown-item" href="#">Oyente</a>
          <div class="dropdown-divider"></div>
         
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cursos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Cursos Sordo</a>
          <a class="dropdown-item" href="#">Cursos Oyente</a>
          <div class="dropdown-divider"></div>
         
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Configuracion</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Español</button>
  <button type="button" class="btn btn-secondary">Ingles</button>
  
</div>
<br/>
<br/>

          <Grid container>
            <Grid item xs={4}/>
                <Grid item xs={4}>
                <img class="card-img-top" src="https://i.imgur.com/9OeHzzV.jpg" alt="Card image cap" style={{width: '18rem'}}/>
                <h1>Sign Smiles</h1>
                <br/>
                <br/>
                <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">¿Que somos?</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">¿Cual es nuestra funcion?</button>
  
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
      SignSmiles es una aplicacion en desarrollo con el proposito de eliminar la barrera de comunicacion entre personas con discapacidad auditiva y las personas oyentes.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
      SignSmiles funciona mediante dos opciones de vista:

Vista para oyentes: el usuario buscara por medio de palabras las señas que busca.
Vista para sordo: esta sera simplificada y facil de usar para usuarios que no puedan leer. Sera mas ilustrada. Los usuarios buscaran por medio de imagenes la palabra que busquen y podran darle a un boton de play para poder reproducir el audio de la palabra de manera que pueda fluir una conversacion entre el sordo y el oyente.
      </div>
    </div>
  </div>
</div>
              
  


                <br/>
                  </Grid>
                  <Grid item xs={4}/>
                </Grid>
                  
    
    
        <Grid container>
            <Grid item xs={4}/>
                <Grid item xs={4}>
                <a target="_blank" href="Sordo.html"/>                                                     <a target="_blank" href="Oyente.html"/>
                <h1>  <img  src="https://i.imgur.com/HT5cXUH.png" title="source: imgur.com"/>Sordo</h1>                            <h1>< img  src="https://i.imgur.com/EPO5Ham.png" title="source: imgur.com" />  Oyente</h1>
                                                                                       
                                                                    
          
                  </Grid>
                  <Grid item xs={4}/>
                </Grid>

                <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Menu Oyente</a></li>
    <li class="breadcrumb-item"><a href="#">Menu Sordo</a></li>
    <li class="breadcrumb-item active" aria-current="page">Inicio</li>
  </ol>
</nav>
            </div>
        )
    }
}

export default withStyles(styles)(Home)