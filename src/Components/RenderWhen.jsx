


const RenderWhen = ({condition,children}) => {

    if (condition) {
        return(
            <>
                {children}
            </>
        )
    } else {
        return null
    }

}

export default RenderWhen