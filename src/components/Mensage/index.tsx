interface mensageInterface {
    typeMessage: string,
    text: string,
    hourMessage: string,
    nameRemetent?: string
}

const Mensage = (props: mensageInterface) => {
    if(props.typeMessage === "send"){
        return(
            <div className="w-1/4 flex flex-col justify-end mr-6">
                <div className="flex justify-end m-1">
                    <span>Você - 11:32 </span>
                </div>
                <div>
                    <div className="bg-sendMessage rounded-lg text-white p-5" >{props.text}</div>
                </div>
            </div>
        )
    }
    if(props.typeMessage === "recive"){
        return(
            <div className="w-1/4 flex flex-col justify-end ml-6">
                <div className="m-1">
                    <span>{props.nameRemetent}- 11:32 </span>
                </div>
                <div className="bg-reciveMessage text-white rounded-lg text-white p-5" >{props.text}</div>
            </div>
        )
    }
}

export default Mensage;