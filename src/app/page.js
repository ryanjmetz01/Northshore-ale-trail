import styles from "./page.module.css";
import Districts from "./Districts";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.greeting}>Hello and Welcome to the NorthShore Ale Trail</h1>
        <h3 className={styles.explore}>Explore 3 great regions</h3>
        <div className={styles.districtContainer}>
          <Districts 
            d1Name="Riverside Route"
            d1Img="/riverside.jpg"
            d2Name="Warehouse District"
            d2Img="/warehouse.jpg"
            d3Name="Wine (& Hop) Country"
            d3Img="/wine-glasses.jpg"
            linkName1="/riverside"
            linkName2="/warehousedistrict"
            linkName3="/winecountry"
          />
        </div>
      </div>
    </main>
  );
}
