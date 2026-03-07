export default function UpperHeader() {
    return(<>
    <div className="w-full h-18 bg-white grid grid-cols-[1fr_2fr_1fr]">
        <div className=" flex items-center justify-center">
            <img src="./public/logo.jpg" width={"50px"} />
        </div>
        <div className="bg-[red]" >Address</div>
        <div className="bg-[#CBBA63] flex items-center justify-center">cart</div>
    </div>
    </>)
}