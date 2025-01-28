import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return ( 
        <div className="flex items-center justify-center gap-2 h-screen ">
            <CircularProgress color="inherit" />
            <div>Loading...</div>
        </div>
     );
}
 
export default Loading;