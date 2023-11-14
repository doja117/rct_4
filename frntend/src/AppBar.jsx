import Typography from '@material-ui/core/Typography'
import Button from '@mui/material/Button';
export default function AppBar(){
    return <div style={{
        display:"flex",
        justifyContent:'space-between',
        backgroundColor:"#eeeeee"
    }}>
    
    <div style={{
        backgroundColor:"#eeeeee",
        display:"flex",
        justifyContent:'flex-start'
    }}>
        <Typography>Coursera</Typography>
    </div>
    <div style={{
        display:"flex",
        justifyContent:'flex-end',
        marginRight:'10px'
    }}>
        <Button>SignUp</Button>
        <Button>SignIn</Button>
    </div>
    </div>
}