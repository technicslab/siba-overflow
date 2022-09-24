export function LoginWarning(props){
    return(

        <div class="alert alert-warning alert-dismissible fade show mb-3 mt-3 " id="warning"  role="alert">
                    {props.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{props.closeWarning()}}></button>
        </div>
    )
}