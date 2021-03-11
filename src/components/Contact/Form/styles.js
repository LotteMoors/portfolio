import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '5px 0px'
    },
  },
  paper: {
    padding: '25px',
    backgroundColor:'rgb(250, 250, 240)',
    justifyContent: 'center',    
    position:"sticky",
    top:'0'
  },
  title:{
    marginBottom:15,
    fontSize: "1.5rem",
    fontFamily: "Roboto, sans serif",
    color:"black",
   
  },
  
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin:'0 auto',
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

