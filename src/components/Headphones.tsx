import styled from "styled-components"
import { Button, NewProductDescription } from "./header"
import ProductPage from "./ProductPage";
import usePageContext from "./Context";


export default function Headphones(){
    const context = usePageContext()

    return(
        context.selected
        ?
        <ProductPage id={context.productId}/>
        :
        <>
        <NewProductDescription>
          <h4>
            NEW PRODUCT
          </h4>
          <p className='productName'>
            XX99 MARK ll HEADPHONES
          </p>
          <p>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Button className="newProductButton">SEE PRODUCT</Button>
          
        </NewProductDescription>
        <ProductWrapper bgImage={"./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"}>
            <div className="headphone-image">
                
            </div>
            <div className="info">
                <p className="anonce">NEW PRODUCT</p>
                <p className="product-name">XX99 MARK II HEADPHONES</p>
                <p className="prod-desc">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                
            <Button className="seeButton" onClick={() =>{
                context.setProductId(4)
                context.setProductSelected(true)
            }
            }>
                SEE PRODUCT
            </Button>
            </div>
        </ProductWrapper>
        <ProductWrapper bgImage={"./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"}>
        
                <div className="info">
                    <p className="product-name">XX99 MARK I HEADPHONES</p>
                    <p className="prod-desc">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    
                <Button className="seeButton" onClick={() =>{
                context.setProductId(3)
                context.setProductSelected(true)
            }
            }>
                    SEE PRODUCT
                </Button>
                </div>
                <div className="headphone-image">
                
                </div>
        </ProductWrapper>
        <ProductWrapper bgImage={"./assets/product-xx59-headphones/desktop/image-product.jpg"}>
        <div className="headphone-image">
                
                </div>
                <div className="info">
                    <p className="product-name">XX59 HEADPHONES</p>
                    <p className="prod-desc">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    
                <Button className="seeButton"  onClick={() =>{
                context.setProductId(2)
                context.setProductSelected(true)
            }
            }>
                    SEE PRODUCT
                </Button>
                </div>
        </ProductWrapper>
        </>
    )
}


const ProductWrapper = styled.div<{bgImage:string}>`
    width: 1110px;
    height: 560px;
    display: flex;
    gap: 120px;
    color: #000;
    margin: auto;
    margin-top: 140px;

    .headphone-image{
        width: 540px;
        height: 560px;
        background-image: url(${(props) => props.bgImage});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 7px;
    }
    
    .info{
        width: 445px;
        height: 343px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding-top: 200px;
    }

    .anonce{
        font-family: Manrope;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.12px;
        letter-spacing: 10px;
        text-align: left;
        color:#D87D4A;
    }

    .product-name{
        font-family: Manrope;
        font-size: 40px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1.4285714626312256px;
        text-align: left;
        margin: 20px 0px 40px 0px;
    }

    .prod-desc{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(0,0,0, 0.5);
    }

    .seeButton{
        margin: 60px 0px 0px;
    }

    @media (max-width: 1440px){
        width: 689px;
        height: 706px;
        flex-direction: column;
        gap: 0px;
        
        &:nth-child(even){
            flex-direction: column-reverse;
        }

        .headphone-image{
            width: 689px;
            height: 352px;
            background-size: contain;
            background-position: 50%;
            background-color: #f1f1f1;
        }

        .info {
            padding: 0px;
            align-items: center;
            width: 572px;
            height: 302px;
            padding-top: 0px;
            margin: 52px auto 0px;
        }

        .anonce{
            font-family: Manrope;
            font-size: 14px;
            font-weight: 400;
            line-height: 19.12px;
            letter-spacing: 10px;
            text-align: center;
            color:#D87D4A;
            margin-bottom: 16px;
        }

        .product-name{
            font-family: Manrope;
            font-size: 40px;
            font-weight: 700;
            line-height: 44px;
            letter-spacing: 1.4285714626312256px;
            text-align: center;
            margin: 0px 0px 32px;
        }

        .prod-desc{
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: center;
            color: rgba(0,0,0, 0.5);
        }

        .seeButton{
            margin: 24px 0px 0px;
        }
    }

    @media (max-width: 768px){
        width: 327px;
        height: 724px;

        .headphone-image{
            width: 327px;
            height: 352px;
            background-size: contain;
            background-position: 50%;
            background-color: #f1f1f1;
        }

        .info {
            width: 327px;   
            height: 340px;
        }
    }
`