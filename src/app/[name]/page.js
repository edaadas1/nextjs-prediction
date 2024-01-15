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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "25px", fontSize: "20px", padding: "50px", backgroundColor: "black", color: "white", width: "30%", height: "300px", borderRadius: "10px" }}>
                <div>Age :  {age.age}</div>
                <div>Gender : {gender.gender}</div>
                <div>Country : {country.country[0].country_id}</div>
            </div>
        </div>
    )
}

export default Page
