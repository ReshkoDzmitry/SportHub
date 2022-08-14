import React from 'react';
import s from './opinionCard.module.scss';
import vector from './vector.png';
import {people} from '../../data/data';

const OpinionCard = () => {
    return (
        <div className={s.opinionCardWrapper}>
            <div className={s.opinionCardPC}>
                {
                    people.map(m => {
                        return (
                            <div className={s.opinionCard} key={m.id}>

                                <div className={s.photoBlock}>
                                    <div className={s.photoWrapper}>
                                        <img className={s.photo} src={m.photo} alt={m.alt}/>
                                    </div>
                                    <div className={s.quotesWrapper}>
                                        <img className={s.vector} src={vector} alt="vector"/>
                                    </div>
                                </div>

                                <div className={s.nameWrapper}>
                                    <h6 className={s.name}>
                                        {m.name}
                                    </h6>
                                </div>

                                <div className={s.postWrapper}>
                                    <p className={s.post}>
                                        {m.post}
                                    </p>
                                </div>

                                <div className={s.descriptionWrapper}>
                                    <p className={s.description}>
                                        {m.description}
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>


            <div className={s.opinionCardMobile} key={people[0].id}>

                <div className={s.photoBlock}>
                    <div className={s.photoWrapper}>
                        <img className={s.photo} src={people[0].photo} alt={people[0].alt}/>
                    </div>
                    <div className={s.quotesWrapper}>
                        <img className={s.vector} src={vector} alt="vector"/>
                    </div>
                </div>

                <div className={s.nameWrapper}>
                    <h6 className={s.name}>
                        {people[0].name}
                    </h6>
                </div>

                <div className={s.postWrapper}>
                    <p className={s.post}>
                        {people[0].post}
                    </p>
                </div>

                <div className={s.descriptionWrapper}>
                    <p className={s.description}>
                        {people[0].description}
                    </p>
                </div>

            </div>
        </div>
















        // <div className={s.opinionCardWrapper}>
        //     <div className={s.opinionCardPC}>
        //         {
        //             people.map(m => {
        //                 return (
        //                     <div className={s.opinionCard} key={m.id}>
        //
        //                         <div className={s.photoBlock}>
        //                             <div className={s.photoWrapper}>
        //                                 <img className={s.photo} src={m.photo} alt={m.alt}/>
        //                             </div>
        //                             <div className={s.quotesWrapper}>
        //                                 <img className={s.vector} src={vector} alt="vector"/>
        //                             </div>
        //                         </div>
        //
        //                         <div className={s.nameWrapper}>
        //                             <h6 className={s.name}>
        //                                 {m.name}
        //                             </h6>
        //                         </div>
        //
        //                         <div className={s.postWrapper}>
        //                             <p className={s.post}>
        //                                 {m.post}
        //                             </p>
        //                         </div>
        //
        //                         <div className={s.descriptionWrapper}>
        //                             <p className={s.description}>
        //                                 {m.description}
        //                             </p>
        //                         </div>
        //
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        //
        //
        //     <div className={s.opinionCardMobile} key={people[0].id}>
        //
        //         <div className={s.photoBlock}>
        //             <div className={s.photoWrapper}>
        //                 <img className={s.photo} src={people[0].photo} alt={people[0].alt}/>
        //             </div>
        //             <div className={s.quotesWrapper}>
        //                 <img className={s.vector} src={vector} alt="vector"/>
        //             </div>
        //         </div>
        //
        //         <div className={s.nameWrapper}>
        //             <h6 className={s.name}>
        //                 {people[0].name}
        //             </h6>
        //         </div>
        //
        //         <div className={s.postWrapper}>
        //             <p className={s.post}>
        //                 {people[0].post}
        //             </p>
        //         </div>
        //
        //         <div className={s.descriptionWrapper}>
        //             <p className={s.description}>
        //                 {people[0].description}
        //             </p>
        //         </div>
        //
        //     </div>
        // </div>
    );
};

export default OpinionCard;