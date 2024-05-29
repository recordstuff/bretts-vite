import { Dispatch, FC, SetStateAction, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useOutletContext } from "react-router-dom"
import { firstBreadcrumb } from "../reducers/BreadcrumbsSlice"

const BaconIpsum: FC = () => {
    const dispatch = useDispatch()
    const setPageTitle: Dispatch<SetStateAction<string>> = useOutletContext()

    useEffect(() => {
        setPageTitle('Bacon Ipsum')
        dispatch(firstBreadcrumb({title:'Bacon Ipsum', url: 'baconipsum'}))
    }, [setPageTitle, dispatch])

    return (
        <>
            <p>
                <a href='https://baconipsum.com/?paras=5&type=meat-and-filler&start-with-lorem=1' target="_blank" rel="noreferrer">Bacon ipsum</a> dolor amet jowl drumstick ground round venison alcatra.  Pork loin capicola shoulder swine alcatra. Bresaola hamburger swine, brisket rump capicola  beef ribs landjaeger tail prosciutto turkey tenderloin pastrami beef. T-bone andouille cupim, salami buffalo burgdoggen flank swine pork capicola meatloaf sirloin rump. Buffalo short loin burgdoggen doner porchetta fatback spare ribs ground round pastrami t-bone chislic.
            </p>
            <p>
                Cupim pork belly ribeye, turducken bacon shank pork loin salami. Porchetta drumstick pancetta shankle chuck. Turkey flank strip steak, jerky capicola pork loin chislic swine t-bone drumstick filet mignon pancetta short loin shank buffalo. Pastrami kielbasa strip steak short loin, cupim pork belly ham hock chuck ground round. Strip steak short loin porchetta, spare ribs pastrami sausage pork belly chicken burgdoggen pork chop biltong. Boudin jowl jerky beef porchetta drumstick buffalo hamburger ribeye brisket tenderloin meatloaf.
            </p>
            <p>
                Picanha cow, venison pastrami boudin sausage drumstick. Biltong picanha leberkas, doner spare ribs brisket pork loin drumstick alcatra shoulder hamburger chuck. Spare ribs beef pig, sausage brisket beef ribs cupim. Turducken picanha bresaola jowl. Porchetta bresaola corned beef pork loin rump biltong tenderloin venison shank meatball fatback jerky. Sirloin pancetta cupim, chuck brisket flank tail tongue sausage meatball filet mignon porchetta pig corned beef ham hock.
            </p>
        </>
    )
}

export default BaconIpsum