import React from "react";
import clsx from "clsx";
import styles from "./FrameRootRoot1.module.css";

export const FrameRootRoot1 = ({ variant = "default" }) => {
  const FrameRootRootRootFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <button
      onClick={(e) => FrameRootRootRootFunction(e, "FrameRootRootRoot")}
      className={clsx(
        styles.frameRootRootRoot,
        { [styles.loading]: variant === "loading" },
        { [styles.error]: variant === "error" }
      )}
    >
      <div
        className={clsx(
          styles.flexRow,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.flexRow1}>
          <div className={styles.element1}>
            μ<br />
          </div>
          <div className={styles.text1}>Start</div>
        </div>
        <div className={styles.blackFlexRow}>
          <div className={styles.flexRow2}>
            <div className={styles.text2}>Invest</div>
            <img
              src={`https://file.rendit.io/n/ThhXysK2DTSBsJ7dzkC9.svg`}
              className={styles.image1}
            />
          </div>
          <div className={styles.browseStartups}>
            Browse
            {"  "}
            Startups
          </div>
          <div className={styles.flexRow3}>
            <div className={styles.flexColumn}>
              <div className={styles.blackRectangle} />
              <div className={styles.login}>
                Log-in
                <br />
              </div>
            </div>
            <div className={styles.flexColumn1}>
              <div className={styles.whiteFlexColumn}>
                <div className={styles.text3}>Sign-up</div>
              </div>
              <div className={styles.text4}>or</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          styles.flexColumn2,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <img
          src={`https://file.rendit.io/n/ezwUZV121G0FAzRRCZFh.svg`}
          className={styles.ellipse}
        />
        <div className={styles.whiteFlexRow}>
          <div className={styles.flexColumn3}>
            <div className={styles.text5}>For Investors..</div>
            <img
              src={`https://file.rendit.io/n/7KNxZkuNNi5cwYnjCyCB.svg`}
              className={styles.line}
            />
            <div className={styles.flexRow4}>
              <img
                src={`https://file.rendit.io/n/N9RJGXLzYcYTFfGiC8id.svg`}
                className={styles.image2}
              />
              <div className={styles.text6}>
                New deals
                <br />
                <div className={styles.text7}>
                  Explore new startups
                  <br />
                </div>
              </div>
            </div>
            <div className={styles.flexRow5}>
              <img
                src={`https://file.rendit.io/n/fGZMRNJKGOuwa9hmSqv4.svg`}
                className={styles.image3}
              />
              <div className={styles.text6}>
                Investing 101
                <br />
                <div className={styles.text7}>
                  Learn about investing
                  <br />
                </div>
              </div>
            </div>
            <div className={styles.flexRow6}>
              <div className={styles.flexColumn4}>
                <img
                  src={`https://file.rendit.io/n/5nL5GydyOWCiTEhN7hV8.svg`}
                  className={styles.image4}
                />
              </div>
              <div className={styles.text6}>
                Need Help
                <br />
                <div className={styles.text7}>
                  Help centre & FAQ
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wisteriaFlexColumn}>
            <div className={styles.flexColumn5}>
              <div className={styles.text12}>
                Most Popular
                <br />
                <div className={styles.text13}>
                  most searched companies today
                  <br />
                </div>
              </div>
              <div className={styles.flexRow7}>
                <div className={styles.timberwolfFlexColumn}>
                  <div className={styles.paragraph}>
                    wiuhwivowrfjhworifjhweifuwehfouwhf4gwgw4gwrgergw
                    <br />
                    gefjeufbiweufetherherhrgergr
                    <br />
                    gergwrgergwrgere
                  </div>
                </div>
                <img
                  src={`https://file.rendit.io/n/Eb5IkvspLkj8XDsGnQra.png`}
                  className={styles.unsplashNBnvQw}
                />
              </div>
            </div>
            <div className={styles.flexRow8}>
              <div className={styles.timberwolfFlexColumn1}>
                <div className={styles.paragraph}>
                  wiuhwivowrfjhworifjhweifuwehfouwhf4gwgw4gwrgergw
                  <br />
                  gefjeufbiweufetherherhrgergr
                  <br />
                  gergwrgergwrgere
                </div>
              </div>
              <img
                src={`https://file.rendit.io/n/RQ0ofSVrYQuZXm5iP4PI.png`}
                className={styles.unsplashLnvCexQwCo}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          styles.loadingSpinner,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      />
      <img
        src={`https://file.rendit.io/n/VKUDdPXOQEW9F1d6KxwA.png`}
        className={clsx(styles.errorBang, {
          [styles.error]: variant === "error",
        })}
      />
    </button>
  );
};
