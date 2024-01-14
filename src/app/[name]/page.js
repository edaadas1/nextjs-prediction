import React from 'react'


const getPredictAge = async (name) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}

const getPredictGender = async (name) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}

const getPredictCountry = async (name) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}



const Page = async ({ params }) => {

    const name = params.name;
    console.log(name);

    const ageData = getPredictAge(name);
    const genderData = getPredictGender(name);
    const countryData = getPredictCountry(name);

    // çoklu api çekiminde promise all kullanımı daha doğru (hemen yukarıda getPredictAge fonskiyonunu çağırırken önlerine await koymadığımız için bunlar zaten birer promise dönecekler)

    const [age, gender, country] = await Promise.all([
        ageData,
        genderData,
        countryData
    ])

    return (
        <>
            <div>Age :  {age.age}</div>
            <div>Gender : {gender.gender}</div>
            <div>Country : {country.country[0].country_id}</div>
        </>
    )
}

export default Page
