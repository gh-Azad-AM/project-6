import { SET_PRODUCTS } from "./actionType";

const products = [
    {
        id: 1,
        name: "Samsung Galaxy A35",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veritatis",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/325fe2150172044eb224864cb3e56e1cd47eb0ce_1726040297.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        price: 300
    },
    {
        id: 2,
        name: "Samsung Galaxy A05",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veritatis",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/4080a289e33e3c79fb4f99928355128721f1f39f_1726036489.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        price: 500
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veritatis",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/dd458940260cd00ed0dd634eeca575f9636a76c9_1725964055.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        price: 600
    },
    {
        id: 4,
        name: "Samsung Galaxy A15",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, veritatis",
        image:
            "https://dkstatics-public.digikala.com/digikala-products/eb45bca03515836591113301617c1d07f0cd4b96_1726040057.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
        price: 700
    }
]

export const getProducts = () => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}