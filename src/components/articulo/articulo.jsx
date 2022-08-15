import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function Articulo() {
  return (
    <div>
      <Navbar></Navbar>
      <article className="mx-5">
        <h1 className="text-center mb-5">
          <b>Why should you have a cat?</b>
        </h1>
        <div className="container">
          <img
            src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2019/09/23/1072982.jpg"
            alt=""
            className="img-fluid float-right ml-4"
            style={{maxHeight: '200px', borderRadius: '15px'}}
          />
          <h6>
            Owning a cat can bring unconditional love and companionship to your
            life. Having a feline friend can also help to relieve stress and
            improve your heart health.
          </h6>
          <h6>
            Owning a cat can be an extremely rewarding relationship. A cat has
            the ability to both calm your nervous system and provide an
            immediate outlet for fun and play. Although cats are independent
            animals who like to scavenge and explore on their own terms, they
            are also very affectionate with their owners and people they trust.
            Most cats love to curl up in your lap at the end of a long day while
            you watch television or read a book. The simplicity of this act can
            cause an automatic release of all the right kinds of chemicals to
            your brain, allowing you to ease into the evening without the weight
            of the world on your shoulders. Any cat owner will tell you just how
            much their furry friend helps them to relax and unwind. While many
            people enjoy the company of dogs, a cat can be more of an acquired
            taste but once acquired, it’s a hard taste to lose.
          </h6>
          <h3 className="my-4">Why cats make great pets</h3>
          <h6>
            The versatility of cat ownership is one reason why so many people
            enjoy feline companionship. Cats make great pets whether you live in
            a big house or tiny apartment, and they provide all the fun and play
            of larger animal companions. If you’re thinking of owning a cat,
            these are some of the key benefits:
          </h6>
          <li className="mt-4">
            <b>Cats are low maintenance.</b> Maybe cats’ most alluring quality
            is that they are lower maintenance and cost less than dogs, who need
            walking, training, frequent grooming, and more toys and attention.
            Cats are also perfect for apartments or city living. They don’t need
            tons of space to play and explore—nosing their way through the nooks
            and crannies of your kitchen will keep them occupied for hours.
          </li>
          <li className="mt-4">
            <b>They’re quiet.</b> Cats tend to meow when they’re hungry, but you
            rarely have to worry about being woken up or distracted from a task
            by a cat begging for attention. This makes them an ideal pet if
            you’re working from home or have youngsters napping during the day,
            for example.
          </li>
          <li className="mt-4">
            <b>They’re independent.</b> A cat will be there for you when you
            need them but they’re also perfectly adept at entertaining
            themselves. Most don’t need or want constant attention and you’ll
            never have to endure guilt inducing puppy eyes from a cat.
          </li>
          <h6 className="float-right my-3">
            <a
              href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship."
              target="_blank"
              rel="noreferrer"
            >
              Read More in <b>The Joys of Owning a Cat</b> - HelpGuide
            </a>
          </h6>
        </div>
      </article>
      <Footer></Footer>
    </div>
  );
}

export default Articulo;
