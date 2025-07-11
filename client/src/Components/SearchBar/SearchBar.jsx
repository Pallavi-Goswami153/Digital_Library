import { TextField } from "@mui/material"
import { EbookViewer } from "../../Screens/EbookViewer/EbookViewer";
export const Search=(props)=>{
   
    return(
        <>
         <TextField
          id="outlined-secondary"
          variant="filled"
        //   fullWidth
            onChange={props.op}
          label="Search E-Books"
          focused
          color="primary"
        />
        </>
    )
}