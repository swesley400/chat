interface propsUser {
    imgUrl: string,
    nome: string,
    status: string
}

const User = (props: propsUser) => {
    return(
        <div className="flex w-100 m-2">
            <div className="mr-5">
                <img src={props.imgUrl} alt="foto de perfil" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">{props.nome}</label>
                <label htmlFor="" className="text-statusColorOnline">{props.status}</label>
            </div>
        </div>
    )
}

export default User;