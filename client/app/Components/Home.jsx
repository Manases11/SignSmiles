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
            <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Sign Smiles</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:8380/home">Inicio<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Noticias</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Lenguaje
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="http://localhost:8380/deaf">Sordo</a>
          <a className="dropdown-item" href="http://localhost:8380/listener">Oyente</a>
          <div className="dropdown-divider"></div>
         
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cursos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Cursos Sordo</a>
          <a className="dropdown-item" href="#">Cursos Oyente</a>
          <div className="dropdown-divider"></div>
         
        </div>
        
        
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Configuracion
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" >Soporte tecnico</a>
          <a className="dropdown-item" >Datos</a>
          <a className="dropdown-item" href="http://localhost:8380/login">Cerrar Sesion</a>
          <div className="dropdown-divider"></div>
         
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
<div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary">Español</button>
  <button type="button" className="btn btn-secondary">Ingles</button>
  
</div>
<br/>
<br/>

          <Grid container>
            <Grid item xs={4}/>
                <Grid item xs={4}>
                <img className="card-img-top" src="https://i.imgur.com/9OeHzzV.jpg" alt="Card image cap" style={{width: '18rem'}}/>
                <h1>Sign Smiles</h1>
                <br/>
                <br/>
                <p>
  <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">¿Que somos?</a>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">¿Cual es nuestra funcion?</button>
  
</p>
<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
      SignSmiles es una aplicacion en desarrollo con el proposito de eliminar la barrera de comunicacion entre personas con discapacidad auditiva y las personas oyentes.
      </div>
    </div>
  </div>
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body">
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
                <a target="_blank" href="http://localhost:8380/deaf"/>                                                                                                      <a target="_blank" href="http://localhost:8380/listener"/>
                <h1>  <img  src="https://i.imgur.com/HT5cXUH.png" title="source: imgur.com"/><a href="http://localhost:8380/deaf"> Sordo</a></h1>                            <h1>< img  src="https://i.imgur.com/EPO5Ham.png" title="source: imgur.com" /><a href="http://localhost:8380/listener">  Oyente</a></h1>
                                                                                       
                                                                    
          
                  </Grid>
                  <Grid item xs={4}/>
                </Grid>

                <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="http://localhost:8380/listener">Menu Oyente</a></li>
    <li className="breadcrumb-item"><a href="http://localhost:8380/deaf">Menu Sordo</a></li>
    <li className="breadcrumb-item active" aria-current="page">Inicio</li>
  </ol>
</nav>
            </div>
        )
    }
}

export default withStyles(styles)(Home)