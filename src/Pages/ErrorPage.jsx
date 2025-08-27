
const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="text-center space-y-5">
                <h2 className="text-8xl font-black">404</h2>
                <p className="text-3xl font-bold">Not Found</p>
                <p className="text-base-400 ">The resource requested could not be found on this server!</p>
            </div>
        </div>
    );
};

export default ErrorPage;