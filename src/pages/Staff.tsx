import {Navigation} from "../components/Navigation.tsx";

export default  function Staff() {
    return (
        <div>
            <div className="w-1/4 md:w-1/5">
                <Navigation/>
            </div>
            <h1>Manage your Staff here</h1>
        </div>
    );
}