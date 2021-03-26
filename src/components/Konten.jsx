import React from 'react';
import axios from 'axios';

const Quran = () => {
    const [allSurah, setAllSurah] = React.useState([]);
    React.useEffect(() => {
        getallSurah();
        console.log('effect berjalan')
    }, []);

    const getallSurah = async () => {
        let url = `https://quranapi.idn.sch.id/surah`;
        try {
            let response = await axios.get(url);

            console.log(response.data.data);
            setAllSurah(response.data.data)
        } catch {

        }
    };
    
    return (
        <React.Fragment>
            <div className="flex items-center font-bold text-2xl">Alquran</div>
                <div>
                        {allSurah.map((surah) => (
                            <div className={` ${surah.number % 2=== 0 ? 'bg-blue-200' : 'bg-blue-300'} flex justify-between items-center my-2 px-3 rounded-lg`} key={surah.number}>
                                <div>
                                    <h1>{surah.name}</h1>
                                    <p>{surah.asma}</p>
                                </div>
                            </div>
                        ))}
                    </div>
        </React.Fragment>
    );
};

export default Quran