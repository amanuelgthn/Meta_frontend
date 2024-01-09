function Maincontent() {
    return (
        <h1>I am learning REACT</h1>
    )
}
ReactDOM.render(
    <div>
        <Maincontent />
        <ul>
            <li>USA</li>
            <li>Poland</li>
            <li>Ethiopia</li>
        </ul>
    </div>,
    document.getElementById("root"));