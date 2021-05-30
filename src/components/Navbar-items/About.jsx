import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col,Container} from "react-bootstrap"
import 'bulma/css/bulma.min.css';
import {Box,Tile,Section,Heading,Image} from 'react-bulma-components';




export default function About() {
  


    return (
        <>
       
         {/* <div className="about-info">
            <h1 style={{margin:"80px",color:"greenyellow"}}>I am Abdilkani, Developer</h1>
            <img width="200px" src="https://www.foto-thulke.de/wp-content/uploads/0971pass-mann.jpg" alt=""/>
            </div> */}
            <Section>
    <Box color="green">
      <Tile kind="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile kind="parent" vertical>
              <Tile kind="child"  color="primary">
                <Heading>MY STORY</Heading>
                <Heading subtitle>How i Landed Programming World</Heading>
              </Tile>
              <Tile kind="child"  color="warning">
                <Heading>Tiles...</Heading>
                <Heading subtitle>Bottom Tile...</Heading>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile kind="child"  color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
                <Image
                  size="4by3"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhISEhIYEhIYEhUfEhgYDx8SEhAVJSEnJyUhJCQpLjwzKSw4LSQkNDo0ODE0Nzc3KDE9SEg0Pzw1Nz8BDAwMDw8QGQ8QEDEdGB0xMTExPz8xMTQ/Pz80MTExNDQxMTE/MTQxMTE0MTExNDExMTExMTExMTExMTE0MTExNP/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABGEAACAAQDBAYGBgcIAgMAAAABAgADBBESITEFQVFhBhMiMnHRQoGRlKGxBxYjUlXBFDNUYpLS8BdDRFNyguHxJIQVNGT/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEAAwEBAQEBAQEAAAAAAAABAhEhMRJBA1FxYf/aAAwDAQACEQMRAD8A519cNp/iFT70/nC+t+0/xCp96fzgGIUMhz64bT/EKn3p/OG/XDan4hU+9P5wFjwwwN/XDan4hU+9P5x6OmG0/wAQqfen84BR7CA79cNp/iFT70/nC+uG0/xCp96fzgHCgA59cNp/iFT70/nDT0w2p+IVPvT+cBY8IgDRS+l20iB/59T70/nDJ/S3aYP/AN+psf8A9T+cBJLaj2RKc9YAJL0w2n+IVPvL+cO+t+0/xCp95fzgM6bxuhqCANDL6WbT/b6n3l/OI53TDaV8q+pH/sv5wKBsCYrgXMI2n2d0o2kzdqvqSBmb1L+cFfrLX/tk/wB5fzgBQSsKDicz+UWYZCp6TV/7ZUe8v5xC3Smv/baj3l/OKEVpi5wAXHSev/bqj3l/OHfWmvH+NqPeX84AtrEyJnnuiaY39Z6/dWVHvL+cOHSav/bJ/vL+cCYaxgIXfpPXj/GVHvL5/GFAYZm+4fOFAAd6NhvHxiMUrcRF12JMehIvRbUv0VuIhrUzcRBALEbjODQ2pimPER7+itxEWwITtYQaJV/RTxEN6g8RDnmGI8cCnvU8xHhlcxCDGFcwj0QkHcRFmRILEAsq30JvYxAhizIc3GV+MK09Pa3Z7oFuVIY7iYfSbKd7WKi/EnyiwqAjnfLlB3ZksBSxyAEK3gk6zdfs50OEspNrmxPlBLop0Un1s1ZcooO8SWJChRrewPIeuKVZMLzCdSzZeG6O5/RXsQSaXrmHbmZLyQH8zc+yGKzP9ldZ/nSP43/lhf2V1n+dI/if+WOxQoCcc/srrP8AOkfxP/LDJv0VVlieukafef8AljssRvMAGfGw8YKHC0+jqqxDFNkgXGrPqf8Ab6/VF8/RjWC32six/ff+WOnVdErkKLrcnO3dG/y9sXmp7KO0ezbMsbWjOWnqOUL9F1YRfrpA8Xf+WIj9GFZiA66Rc39N8hx7sdXn1OQCsLnIcz5CHKRLl42zYgWyzJ3CHLsackf6MqvGJYnSL2ubM9lHPswo6zIliWjPMN3Y3fiTuAhQE+YkSHsIlwwwiNkQwCI3GcTWiGZADXbCLxQdyTcnwiesbujlECZsLCFaciSmpnc2UeJ3CD1HsmWtsQxHffSFQSwqAWzMEpKxz5ZV04YyerFNs6Uf7tT/ALIlmbNk/wCWP4YnpZIO6/8AutE7yzxZfHtiI3f9a6n+AlRsGS2i4TyygTU7DmISUOMcN8asow0AYcVb8oYW4gjxEH3YL/PG/jHSywyIsQdDBifOCSCBqwt5wQ2hswTlxJYTBp+/yMZ5CxVpZBD5g39E8I1xylY5Y/NTdGdmtU1MuWmrOoXLQnf6hc+qPpigpVlS5cpe6iqq+AEcu+h/YRDPUuvdBVDbVzr7Bb2x1mNGVewoUKAiiK1zfcNPGHMbD5R6osIQe2iN0vluiSK06bawGZLADx/6uYV0DUpFBxEC405CI5Y6yZjPdW4UbmbeYdVuTaWpszDtH7qxV2vWCTLCIO0RZQOEHIPVHbVS0yYJKGyAfaNwG/y9sKB0kNhJJuTmx+8Y8jPatOJWjzDDBOHAw5XBjpZaeMsV3QxbiNyIAE1inEPDKHUKXcCHV4zB5RY2TLzJ9kRnyLw7RyQult0WZFVKU9twDFNZJOROFYim0MvMqxDeN7xhy+unsnGoppsl+7MF+TZxOzkbww48Y560hgcmIIPhGj2JXm+CYb/nCymvDxy3ewdKqRcix5RXe+57+MX5roFuSAIGTq2SLXOptEat/Gn1J6mktYg88yIE7epcM9JijJx2v9Qt5iC0go4vLa4hm1mAlox9GYLZcj/xFYXVRn2OudDKcJQ04w4SUxNzJOsH4yHRHpjT1KrLYiXPCgFNFfmvlGvjpchQoUNYwA3U+HziSGqIdAHkUZjhAXa9xcKOJi/FNlxOCe6py5tE0IZY6tHmzD2jmx4cBGcmuzuZjm5On7q+EEdqTWmthBtLU5/vn+v6zir+iYiAx7OpA1MRlfxUhS7HMd0b9xMKLFTMRVtpwAhRGj2+dgBzhwA5w1YdaOtifihjwjCAgClWDu+MFdjp2SecQmiE1CEP2iMLg+kOUE9lScKAEZ74xzymm/8APG769mFb9tgqDna8TrVUeGyzAG5ggX9cOqtklyrqDcZ21BgTN2DMLlgXtiuQUPz0jPH5v61y+p5DqhlLZWvutvixQSGJuBpElPsBsRcmy/ctp4GNBs+jAGULLLXiscd+g1RMfAQxMBpo4HONNt1MKEgboytNPRj2msP9Jb5Q8epz5fUtFMmowdCTn2o0e1puOnllbXfMciNfnA6RIVl6yW4cDvWMS7ScgywP1YX2MdfyhztTeT0EpKiZLIBuAGupBwvLbiDu+UdW6L/SOVCS6z7RCQBPUZp/rX8/nHPHkBxdbYwMuDcjFaVKdGJljtAduWe0bb7D0hG86xfTcicrqrowZGF1INwwh++OH9Eul02myl/aSb9unLduXxZOI5f9x2DYu1pNTKE2Q4ZT3h6StwI3GEQnChQx2ABJ0AgCKe5yVe8dOQ4xS2hMKIJcvvtvJ7o3kxaM0Khdsri/hwEDC7EFm7zZ6dwcIjKnIptcAKuZ+8fn4w4kKBn4k6sYlvlmPVxgLtGrzztfRRujNSKvqsT4VzPyHGFDaamw2OrvmTCgDi+GHKsIiPQI6mGyCQ4JHoMOB0gonqybS7YVJZ2uTwgps5BkYjq8HVXFg3YXMa552h9E1o472O/Hl00lOuWUNeSxyJy5RFRz+MSzqmwvviI0qCoKr2RE1Cb3gSKgFyXIGeQJgpQ1EsAnFnuEFPmkO0pAcFSMoyW0tkEqFUHCCSMIvh8RGxqnFsQOV4rNLvmIMcrinLGZes9sujcdX1YAIVlmHQzL21HKL9UoLMLZDL2ZQbpkF9M4n6WdG2p8FRLBanmBS+/qphGfqMa4ZfVtYf1nzJGImSzLbEp7N8xwi71Qmqro2GYuasMiDHlVYC7EAc4HU1UUYutzLB7RA7KxtGMERQfpBJlfZ1iZugOET7eknPlFjYe3Z8mdjRurqQbOjDDLqv3WG5vn4xYMhZoWZLbBNU3luDYgxbSil7RR0fDJ2pLGfopVIN9uMXOleOs9G9vy6uUHUhZgFpiX7SNv9UE5gxG3ojX948I+eKDa1TR1ADky5yGwY6NybiOcdb2B0yl1KdWR1dQB21JyPMQspqEMbQmYmBJui90a4mim8wtbdEk57WCjxPCKzvYEnWML1pJpUr6jBvJO/wAhApJZdrsbt8E5eMTVgdziXLL+jENO5FgBnABqUgAIBztmeEKHbKQkqTkAb574UIOEWj0LD7QgI6nO8AhWh0KCnFqtq1ZEUXxFlJy0iaVMsBAtx3f9UW2bIZ6axhljJyOnDK3tE5Vachvi/Jmg5kiADtYRS/8AkArFXxAbhxiJjGtz1+LvSCjxzC6TLA2xLfOBMqomJYBzYaXMGZU2Wy3vbxbWKsyjltmMRJzyIIEX+aRbd7lTbGrZrzGV+7aNVKbKMvRN1WpuPlBQVehGhjLLHvI1wy51oKCVjmIg1ZgB6zHWp9JLeWZTqGlstipGREc8+j6kMyeZhHZlrf8A3HIfnHTI0/ljqbYf2y3k+fvpD2F+i1AlIxZCuNL6hSSLHwsYymzaopNz0IIYei45x236UdgtPlJPloWeWCGsLtg1v6jf2xw+slFJxQ5Mps3Jt49saxmI0G0eomNLuTLxHDfcN0aSpk9aEnSX6ueljLcGxvGAnTLzG52+UHNg7VKES2PZOl90VCbRxL2rLMqYok7Rlre9rLNtvH5iMUxnUs0Sp2KXMQ/Zv9zzX5Roq+S5KVEhsE5DdSPSg6hkbYpWVwJdYi9ob1b7w4gxXqbwS6M9LUnKJc4BKgKN/ZfmDBFyXclm7AF8tDHGZiTaWb1E68tkP2b/AHPNTHS+i3SMTZeCYAJ6ixF+/wAxGOeOuxWOX5Rprm9hYbr6w2k2c4vMtcbhbWCdLIJGNh4c4OSZIwgW3RktDsynW1zmd/lCizQoFuN8KLk4h82Wj0JHgWJglo3ZxFbdDWiYrDHWEtWcacjDusj1xeIn0zGY1jPJePDplQbgXghS1wQYcj4qDAN2O8xDMYneYWlfTc0abPnLeauCZvKjCreyG1OwKbDeXPZeGYP5RhFq5i5X9sSDaMw6k/xQXGrx/rNasGa2imJpNWYuhyIaLdK5IAPqgKlUSLQY2FTPNnSpSZl3Ue0wrE/Xdu49A6Lq6NGIsznEfDd8M/XGmiGnkhEVFyVVVV5AC0OmzVVSzGwGpMXJqaZ276irXYI2C3WEEJfTFuv844l0n6AVMp1WVLeqd5jMXRDa1hk25cy3wjr2z6wVE13XuS+yvNzqfUPnBgwyfJkyjZHIcWIJBBFiDvB5w10w24HTlHYPpR6LLY1slQD/AIhQNf37ceMcsdARY6QpkBbo9tL+7c5+iYvV0uZJmJWUxwzEILAaOOcZFCUbgQcjxjW7I2jjXC3etnzi5Sa6dT0m2KTrEAScozFhjlP+YjmpE2lnmTNJlzEb7N/u8PFT8ILCbNoJ4qqe5lk/aJ6Nt/qjbbY2XT7UpVnSyFmW7LDMo+9T/XOH6nxd6J9LUmyjLnD/AMiWNB/ecD/zBzZm1HaZaYRY90DRY4XKedTThKmEy5yN2GPdI4HkeMdC2Ft0TbNYrMS3WJ6Q5iMssNdjSZOoBrMCDYHXKFFWTODopU3yhRGz0+fpSZXj0g3yGXGJsIVVHFbwy8bsp/w20eFY9JEItAe1/Y2zhME7PAcFke18DG+cB9rbPnSSOsQg6Fhmj8wY2HRiWVklzljcn/aLDX1QaZA3ZIVgRZgRiBG/42hfO0feq5DNa4vEExyN8dB2r0UlOC0kdW9jiw3wM+XondnujC7W2XMktZ7WyzBuM/jC+dLmcy8VMY+EOQA+MVweGcXKSkmObKpJ4AQ6e3sqN70JltTT6apmAANMwgEZqCNfYT7IrbF6NKlmmWZ9VXgL6+OsGdq3SSHIBCutrNmDewiDmU8dd2ntKVTyzMmvhXd95jwA3xzDbPSudUPgTsoWsij4euMvtfb8+pmB5r3sLKoyRByH5xY6MbUpZFVLmVWLApugVcXbGhPIRQdq6P7P6inSV6VrueLnXy9UXZzgBidALnnygDK6aUTAETGsd/VM1vZeFN6SUjZLNAW1+0CmI+u0K+BcclycQuCLFbXULw844j0x2AaOoIXOS5Yyjbu8UPMfKO4SJgdPs3R+auCPheM5tvo+1TLmS5owki6NuR9xERNz1XK4ZULfPfD6SeUYMN0O2hTTJMx5UwYXRiGBipKezW3RpENrSVCTZdiAQRZhFbYO05mzqnA12pnNjwt5j+tYD0FSUYEd0xoqqnSfLKNoR2T90xcpVoul/R2XXSlnySC4W8txo44H+so5zs+rmypgUgpPQ2s2XWLvUxrugO3DJmNQ1ByLfZk7mOnqPztxi90/6Mdan6RJW01M2sM3XzEFhTnGt6DbZl1ErsntDvKe8hhRx3YO2ZkiYs+WSJifrFGXWJvPjCjK4dV9U2rn3w2v3V08IiE+I2SHhBujRns4zDuEJVducOEvOCGzZcsTJfWDEmMFsyPXBoXJo+jz4JUtZqYVN8LjMZnRhbI/CNAibwcrbtDp/wAw95etmABZSAFviPPjfKKk6fNS95V1AOIKrHHfgYpja9raqXKUvMOi6d+Y2W4andGK2nSzKhJU5AqFnwZr+q3BcJGR0/6jWU9RLD2WSFYi7G53ZWv+UNqZxcHq5WJw6sSEva2hAvu4wjxumJl9FK1QHeV1ig5gOLkctCD4RqNjUKW7Fw4CllICsl8wMxocxfnEE+vnhyblnIYYM937v5xjK/aNRLqBMSaetXvFDdPC/pc4VjTG2ur09LYD0shY8fX7YynSra4c9TLIKKbuR6b8uQhlR01aZSBAhSoYYZhFsAXewOtz8LmMvihaaYz/AFKzcIIyaJSt3AY66ZryvAeZImOhKZAMLtfQ8oubM2k4YS5o7V9RoYYyqxJLyWupLS75j7kFmmZAg5HnpFaaljcaEX4giPLhe0t8BNmG5fCBntaWe4sQxB4g2i9S7cqUN1nvbgXLD2GKBUEXUi0V2bDmPZBrfsH1/wCiO1ZaVczrJ6hphXDjAwNyOVhceEYmu2S6XMtusA7ww4XW2+0bORMxC41ivtOkL2mS7rMABI0Dnzg1J+HMr/rJUM4MLHXfB7ZNUVOBj4QJqKcMDOljDMT9cmlxvI/MRJImYwHXWDxfoxt3Z5dRNl5TEFwfvLwja9CekAq5HVzDecgs19XXT2jf6oyuy6rGoG+KNWr0VQlVJOFGa7cFO8Hkb/1aHKVi/wBPOjRkv+mSBZb3mKNFPHw4wo6FJmJU0yTDLskyWCVbgRCh6LbjTLvhSxmIcRwhKpuL8YSFtEIN7Q8LeLPViwMISxkYZbaTYlbPeWJagAIpBc54bafCNAqHqwSQwIGEKuRvvIG6MfsfaBkuxALXXIDe27LSDz1jHth7E2xXPZRBrbgYcQKhFQAJZXFh2Eva/LhAzaFXNlkBpgdsPaOHCvgBxhk3aARWmAAthF29NxqATb1xgOkm1Hd3liZjTFdstG8YWS8cd1b290mdw0iWbjtB3Pez1UcBGYEeAQ5ViW0kh6GL2yqCZUTUlSwSSbsR6CDUxRtG22PsqdTUsycSiGYqYgyP1gRibAEG1zrDkLLLUMqkl4ykpQstOylvSUbzxJ1ijUUC5EZG4t7YtoIintc66Q2W3k8gqP8ASYglPZrEXDCxB4RYKCw8d0QTFF8s4RnIxRzLNyrC6nlFaqqJiGxsQDnlqIJOgKg71II5iI6iSrrc7hAWzUnKuA5gMt1I05iL5cFQd1syIDS0OBpets143i3sxyUPAQzUdpSzLmLUy9L2mW0vuMUamUJR66WCZD94D+6fyMHp8gOkyWxviUgcjugPsSeO1KmC6m4YHQiFo5lpUmbReV25Vu1qSL4IOq/XyQxbEbbzv3iBqUoEyZTzM0YWU23biIr7FqWp5z00zIFuyee4+uCcX60fRvpZNkJMppnbVP1Zvmg3eqFGZ2ySlQwGQZAYUGyEpMsEiPJkoBrbiMonlpw3RK8nENc90NlspTfZgXzEINHlAly6E2JByMeIpGu42MBLMuZhZXtezA24xt6SllhUYAS5dibEhTe+WWljGBmPlygtU9J5cmjlrLOOpIsAe0soDLFb5QQa34b0y2+qEyZTMZuEhmx9hAdRlqbeyMCY9dyxLMSWJJJOpPGG3grbGaj0Q8GGiLezaGZPmJKli7sbDgOZhK2PdDNgGomiZMQ9Qh7RuAGfcI1XSmpH2clBhQLiI04gXHtPrgzJSXSSAFQ4ZSgMBljcjW5sGzjG1NQXd5jG7M1zn8IfnGNu7tAxsIrsd/OJnudM48dbC3KAHTBZV4n1xDMUWyFz8o9dz2b5w14AsUdiADvBBHKKNNPwO8s3xK1jfh/1FinbC1r6xT29LKvLmj0ls1uI/r4QFBF5YviG/wCEPppFlKqbEsT4AxToarEtt9oU+uwTkU3GIC1vl8IAsS8jY6RnasYKksNC26NIWuT4xn9oIWxMNQxMBwT2iMUtJo76EXP7kUOktJ1ktKpO8AMVt4grRtjlAHRlziPZeazKZ8yL25iHpWNZutmGdTpNX9ZLymW+7x+UKHUY/R6l5Ti6PcciDCiWm2lxLpuiJ52E2ByhQobmj1cLkEGzi2/WJnC3uDf7wOqmFChHVSvnhF4se6PzjPsSTc5k6woUNpgbHloUKBb1RoI6t0J2AKeWJ0zKdMXQkdlTmAN949hQROfiHpLWkkSRisjEsSwJdv8AiACiPYUFYw8Id0RzUz1JNs49hQGqkZnKPSDHsKAzQuY+cP2lKxyG4qcQ/P4QoUBQC2fOKta8Ea9C7SHByD9r5gx5CgP9WxMARmJ42iqZF0vyjyFDgi7RIUli+gHwhi9pkmy++veF++seQoP04G9L6XJJybtfCFChROXrXHx//9k="
                />
              </Tile>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile kind="child"  color="danger">
              <Heading>Wide tile</Heading>
              <Heading subtitle>Aligned with the right tile</Heading>
              <div className="content" />
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile kind="child" color="success">
            <div className="content">
              <Heading>Tall tile</Heading>
              <Heading subtitle>With even more content</Heading>
              <div className="content" />
            </div>
          </Tile>
        </Tile>
      </Tile>
    </Box>
  </Section>

        </>
    )
}
