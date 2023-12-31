const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 ml-[560px]">Contact Us</h1>
            <div className="bg-slate-200 p-4 w-6/12 m-auto rounded-xl">
            <form className="m-auto w-64">
                <input type="text" className="border border-black p-2 m-2 rounded-xl" placeholder="Name" /> <br />
                <input type="text" className="border border-black p-2 m-2 rounded-xl" placeholder="Message" /> <br />
                <button className="bg-green-500 p-2 mx-20 rounded-xl">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Contact;