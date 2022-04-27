import {useRouter} from "next/router"
export default function Test({data}){
    console.log(data);
    const router = useRouter()
    const {id} = router.query;
    console.log(router);

    return (
        <div>
            {id}
        </div>
    )
}

export async function getStaticProps({params}){
    console.log(params);
}
export async function getStaticPaths(){
    return {
        paths,
        fallback:false
    }
}