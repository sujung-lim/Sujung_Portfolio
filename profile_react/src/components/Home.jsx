import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  HomeContainer,
  TextFe,
  TextDev,
  Title,
  CarouselWrapper,
  Title2,
  AngleDownContainer,
} from '../styles/Home';

function Home() {
  const [showTitle2, setShowTitle2] = useState(false);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setShowTitle2(true);
    }, 1500);

    return () => clearTimeout(transitionTimer);
  }, []);

  // 아래 화살표 누르면 스크롤 다운
  const handleScrollDown = () => {
    const yOffset = window.innerHeight;
    window.scrollBy({ top: yOffset, behavior: 'smooth' });
  };

  return (
    <HomeContainer>
      <CarouselWrapper showTitle2={showTitle2}>
        {showTitle2 ? <Title2>PORTFOLIO</Title2> : null}
      </CarouselWrapper>
      {!showTitle2 && (
        <Title>
          <TextFe className="text-fe">FRONT-END</TextFe>
          <TextDev className="text-dev">DEVELOPER</TextDev>
        </Title>
      )}
      <AngleDownContainer onClick={handleScrollDown}>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: 'var(--point-color)', fontSize: '50px' }}
        />
      </AngleDownContainer>
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente
        facilis impedit? Qui aliquam unde culpa voluptas eos, id, sed delectus
        ipsum magnam repellat eaque tempore laudantium, omnis voluptatem natus!
        Dolorem quaerat quae ipsum similique a enim rerum voluptatibus qui!
        Iusto pariatur, repellat in voluptas amet ab porro cum provident dolore
        rem saepe iste, aperiam labore non qui laborum? Consectetur. Officia
        placeat libero, similique consequatur nihil minus porro tempore,
        incidunt cumque qui soluta excepturi distinctio ut fuga quibusdam. Quas
        vitae pariatur eveniet, ducimus repellat dicta architecto ex nihil aut
        unde. Numquam eum dignissimos expedita, repellendus harum voluptatibus
        tempora, saepe similique libero culpa veniam quia voluptatum vitae aut
        odit in quisquam quas natus delectus ducimus, qui porro odio enim! Esse,
        perferendis? Dolorem possimus, nulla commodi quas provident soluta ipsam
        iure? Saepe, natus error possimus tenetur soluta dignissimos doloribus!
        In, ipsam! Saepe doloribus pariatur officia voluptatem cupiditate amet
        ipsum dolores quae blanditiis! Inventore eveniet eligendi, nam saepe
        quae veritatis cumque perferendis excepturi dolor enim? Soluta rem
        ducimus consequatur excepturi deleniti aliquid illo non voluptate neque
        omnis magnam officia repudiandae quia, cupiditate nam! Quibusdam ex qui
        dolore animi nihil, deleniti natus, atque asperiores necessitatibus iste
        accusamus rem amet fugit delectus nam, inventore esse ea labore omnis
        nesciunt vero placeat! Incidunt eius perspiciatis necessitatibus!
        Accusantium sed cumque, cum voluptate, laboriosam commodi facilis
        eligendi voluptatem fuga, similique sunt quia vitae? Corporis velit
        magni perspiciatis delectus repellat impedit iusto ut, doloremque
        adipisci. Vitae corporis ut laborum! Assumenda nobis, esse natus,
        obcaecati reiciendis nemo quo repellat voluptate temporibus aperiam
        nihil quaerat magni nostrum error dolorem iste tempore totam officia
        delectus aliquam rerum. Facere voluptatem doloribus recusandae aliquam!
        Fuga perspiciatis rem recusandae at natus! Dolore, impedit id fugit
        voluptas iste cumque reprehenderit. At quo repellendus quasi molestias
        placeat accusantium, harum dicta possimus necessitatibus aut ipsa earum
        impedit cum. Voluptate atque unde, quasi sed nemo dignissimos possimus
        deserunt velit laboriosam minima commodi alias earum eius nihil minus
        natus modi obcaecati inventore distinctio eveniet magnam autem? Fugiat
        impedit vel nulla! Quis reprehenderit provident, repellat nihil
        voluptatum commodi eveniet, dolorum in ullam vitae tenetur maxime
        recusandae deleniti! Excepturi veritatis modi sint vero quasi possimus
        eveniet ipsa iure, ab animi porro voluptas! Minima, eveniet vel. Neque
        sint ullam hic, harum atque mollitia tenetur voluptatem repudiandae
        iusto quam suscipit repellat esse beatae? Quae deleniti expedita cum
        numquam autem delectus distinctio quasi! Eveniet, dolore? Commodi nam
        hic placeat ducimus incidunt rerum deleniti reiciendis ab tempora?
        Corrupti labore eos, nihil, perferendis, alias vel cumque sed rerum
        neque magnam maiores sunt ipsum. Ipsam corporis vero officia. Harum
        deserunt libero deleniti corrupti molestias obcaecati consequatur
        reiciendis aliquam pariatur temporibus earum totam autem rerum explicabo
        doloremque repudiandae dolorem accusamus neque, labore et suscipit ad?
        Suscipit excepturi maiores natus! Non maxime, ullam magnam illum in at
        recusandae reprehenderit doloremque corporis eaque dolorum molestias.
        Aut dolores recusandae, rem porro, ipsam consequuntur dignissimos eius
        dolore temporibus ex ea modi debitis esse. Error, facilis consectetur at
        earum voluptatibus sunt. Debitis excepturi hic sunt voluptatum repellat
        veniam distinctio amet necessitatibus, asperiores ad quisquam ipsa natus
        laborum eos vitae incidunt numquam quae? Dolore, vitae! Possimus nihil
        corrupti debitis adipisci et itaque voluptas iure! Dolore dicta ratione
        provident at delectus rerum tempore, quia est minus ad voluptatem
        aspernatur omnis beatae expedita culpa? Consectetur, nihil aperiam!
        Adipisci quidem veniam porro ducimus vitae quos ullam omnis qui corrupti
        debitis iste magni modi enim, perferendis aliquam sunt nostrum quaerat
        recusandae dolorum velit eius! Esse velit enim consequatur distinctio.
        Eum cupiditate animi recusandae eos tempore ut optio iste eligendi
        officia hic porro ipsam quidem maiores qui delectus, iusto corrupti nemo
        repellendus dolores rem ullam. Quas at odit perspiciatis natus?
      </>
    </HomeContainer>
  );
}

export default Home;
