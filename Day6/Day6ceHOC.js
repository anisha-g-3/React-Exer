import React,{useState} from "react";

const HOC = (WrappedComponent) => {
    const Comp = () => {
        const [products, setProducts] = useState([
            {pname:"DSLR",price:"$1,25,000",url:"https://www.google.com/shopping/product/4652451733034763327?sca_esv=8d08fdb92d3dc4d4&sca_upv=1&rlz=1C1ONGR_enIN1098IN1098&q=dslr+camera&fbs=AEQNm0BJU8HQC3fzNpLzBMuBiMvVRr8BSz33Xp3ghdPGS7xtz4DkKjUwhIZpLqvxYvXFn9vUbxaHayUNqeV8H65C6InRL58TaRIgLWzQD5SxGotCxotPNQAUPXOMJuUV3F-7mbgk8WYbOGelu6b6i3SdgKxXePmzr4aFTaViGgMugpefcc9r5uQoGYlgnUcptcYVjVSVhW9XjqNlH7PQQ5bmcN12WR3RYQ&ictx=111&biw=1536&bih=730&dpr=1.25&prds=eto:12612147157516947117_0,local:1,pid:14865573762946343639,prmr:2,rsk:PC_4956737590800733784&sa=X&ved=0ahUKEwjSg-zSl9uIAxXhRmwGHUILObQQ8gII9REoAA"},
            {pname:"Mobile",price:"$45,000",url:"https://www.google.com/url?url=https://ovantica.com/buy-refurbished-samsung-smartphones/renewed-samsung-galaxy-s23/5863%3Fsrsltid%3DAfmBOopyLYcQARI-LLTn74LgG7FxMKv9_FrfbRV_zIEK_Pf0gAtw0H6cco4&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwi30uf_l9uIAxWcR2wGHfGgKtQQ1SkIuQ0oAA&usg=AOvVaw1N6cJaVP3cQgSIiNxH1hLf"},
            {pname:"Laptop",price:"$2,50,000",url:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTv1zj1IxEUHIylWJ8UYJC2IOwXsgd259h-aU_v253fWo4rwrritn7-Pp5ScqBVeB4RxWaM2r-4ClsVkWBXORnl5BZg0eE7BylqbsO1yB5qWHUajo_vWdmPyg&usqp=CAE"}
        ]);
        return <WrappedComponent products={products} />;
    };
    return Comp;
}
//Day 6
const App = ({products}) => {
    return(
        <div>
            {products.map((data)=>{
                const {pname,price,url} = data;
                return(
                    <div key={pname}>
                        <h1>Product Name: {pname}</h1>
                        <p>Price: {price}</p>
                        <img src={url} alt={pname} />
                    </div>
                )
            })}
        </div>
    )
}
export default HOC(App);