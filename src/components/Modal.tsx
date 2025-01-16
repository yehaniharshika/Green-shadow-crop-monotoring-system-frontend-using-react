export function Modal( props,children ) {
    return (
        <>
            <div className="flex flex-col justify-center items-center max-w-3xl min-h-96 bg-violet-100 mx-auto shadow-[0_10px_20px_rgba(173,_127,_242,_0.7)] overflow-hidden px-5 ">
                <div className="space-y-4">
                    <input type="text" placeholder='name' onChange={(e) => props.setName(e.target.value)}/>
                    <input type="text" placeholder='email' onChange={(e) => props.setEmail(e.target.value)}/>
                    <input type="text" placeholder='phone' onChange={(e) => props.setPhone(e.target.value)}/>

                    <br/>
                </div>
                <div>
                    <button  className="w-40 bg-gradient-to-r from-purple-300 to-purple-500 text-white border py-2 rounded-md hover:shadow-2xl transition hover:scale-105 transition transform"onClick={props.handleSubmit}>{props.children}</button>
                </div>
            </div>

        </>
    )
}