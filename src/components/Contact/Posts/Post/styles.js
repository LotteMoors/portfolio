import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgb(250, 250, 240)'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'rgb(250, 250, 240)',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '45px',
    color: 'rgb(250, 250, 240)',
  },
  overlay3: {
    position: 'absolute',
    top: '20px',
    right: '5px',    
    height: '25px',
    width:'25px',
    cursor: 'pointer',
    color:'white'
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    margin: '10px 10px;'
  },
  message: {
    margin: '5px 12px;'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop:'5px'
  },
});