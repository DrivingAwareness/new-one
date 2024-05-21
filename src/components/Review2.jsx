import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Review2.css";

export default function Review2() {
  let review = [
    {
      id: 1,
      image:
        "https://www.plenodelafemp.es/wp-content/uploads/2014/10/speaker-3-600x670.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio, numquam voluptatem ipsa, temporibus maiores cumque soluta placeat labore autem rerum eveniet nihil molestias cum?",
      author: "John Doe",
      stars: <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZb3g0RquCaEDU60r3EChU66Fu3gLaC1a6A&s",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio, numquam voluptatem ipsa, temporibus maiores cumque soluta placeat labore autem rerum eveniet nihil molestias cum?",
      author: "tony",
      stars: <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>,
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPuf2ZlP6bbOp_29p90V0u1fUHslZP_qTfQ&s",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio, numquam voluptatem ipsa, temporibus maiores cumque soluta placeat labore autem rerum eveniet nihil molestias cum?",
      author: "marks",
      stars: <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>,
    },
    {
      id: 4,
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhISEBUSFhUVEBUQDw8QEBAVFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGislHx0rLS0tLS0rLS0tLS0tLS0tLSstLS0tMC0rLS0tLSstKy0tLS0tLS0tLS0tKystLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABBEAABAwIEAwYEAQkHBQEAAAABAAIDBBEFEiExBkFREyJhcYGRBzKhscEUFSNSYnKy0fAzQoKSouHxFkNTk7Mk/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAJBEAAwACAwACAgIDAAAAAAAAAAECAxESITEEEyJBMnEUUYH/2gAMAwEAAhEDEQA/AMXEiOHpuAuhR0S2OQ9dDk3CMCnoNjgOXbpuCjByWg2OEEgJEcSIHsVQXGlGQMC5ddKRkcgBTMjtsmPapSOVIB+2II/YJtHUpzFUoAI6BJlieOeE3cUAIlqKQlHFJSPTASkKbvKUe5JIALZGa1KwQlxsArDh+CXbe10tiK2QikqWxih7PVROVNIGx7h7QSpaewao/DIlIVrO6h6EtkPmXEVBAwRw3ThtIjQhSMIFlRdtF8QmRT6ayS7FSjwCUd0AshZGgeJMiRCV10JUnG1t0edoton9z2L6UQhaipzO1EiZcq1WVODsSXCUEAASV0J7DWgyJJHddzLudMBq6BDsyl3TBImfw8UCBkKUYCETMdel+Wt/9kvG4E66a8+aADdoiOkXJGaX5JBxSGHfIkHPQcURMAI7GrrWINNiEhFq4bwkyEBrb9VodPhTYo+8BsqpwnirWC2guFJ49xCAwgEajTUXKzZKt1pLo0RMqdsqvGNr6dVVcqksQqXSG5TLKtcLSM1PbJfCI9E5xNvdSWFjRKYo7upNdjTK6guXQQIIKlLsripFmD+CDsHPiqXcFymyNbWG6UdXEp3+ZneKMMCf4+yXKB8bGMMjiVLU9K5w1IH1SUeFvb/wnN3tGxPooW9+E4WvRrW0oHO6jWvsU9qmyu5WTM0EnRWQuu2V2++kGfVJDtUr+bn9EPzc/orVorexLtEWSVLOoHgXI0GpTdjLkJi7CX/rmU7p6WRxFmn10T6npQNgpqihVVZdeF8fH36yFiwOUjS3X5tl2rwqVou5hFt8uoI0000V0paZSrKF3T2VP+Q0y/8AxJ10zLmaHcjbfTltY8rgeyLURaZgLW1tY291fcU4eY/UDI7qBYE+IVTraJ0Ty1w6+x2N/JXxkV+GbJiqPSARmhSLMO1NtuSSqaXKp7KtCbUQx3KXpqckXsnVFSl8jWDclN9C3v0ThLm7EhXOh+HFfNEJbRNLwHNZJI4SEEXF+6QPIlcdwXJkzNzE+S3fAD2sEby3I7I0SNO7XAWI8r7LPl+3aUk5cHl3EsPkhkdFMx0b2GzmuGo/mPFMy1av8daZoqIHAd7s3CQjwddoPjqfcLLSFoxtufy9K61voe0klgi19QCE0kLraApo9zuYKbBCV0Fyy6oktGjROjTlgiUYeHatouQPqoWpq5InZXggrDXxrNk/Jh+F4p4ISeSkm0cNuX0WaMxwjqnDeJT1Kqr49lqzSXySgh8Eymw+LwVR/wCoz1KL+fieZTnDaE8sssrsPjTd9CxQD8c8U/wVz6h4a25ur5iiqskofiiYjCgYrlT8B3Zcvdmt1VZr8PlgkLXNcRyIaSCp2qhbZXFTb0iG4gowynkcOgH+Zwb+Kp9NDrdaDxFSPNC+RwyjPGGh3dLu+LkA6kKlS6AeSc23P9kuC3/Q7pwLKZw9vgoKipp36syDpm1KeR/lULh2hAHL5cp+ii43+0WTk1+mXXDIzcEhWKneOn0UTglcx7dgSByTTEuJpY32bS529Q52b2AWfi29Gh2ktssNTTNd5qkcXYf3rjk0fc2UxTcSOJzPp5o28yWEhvje2yk8TpmSxZxY6XBGxBVmJOa7KsrVz0UHCqEmPMRzd9Db8FHYvGFpnDeEg0oJG7pP/o4fgs/4rgySvb0P4LZxe9mDkvBvhVNeIadfupDhmmH5dED+19kpw8z9CPX7p3hkX/7YSOrvsrdFLfRs9BTNyjTkpenhGXTRMMOpnZR5KTEBDbKOxpGU/GWFoiYeefT21WPuC174xv8A0cbf2yfosjduiWCLZgGC9qBonGP8MZGk2S/CdVYBT/EspMR8lycuS1lOliiXBkP5Gup5Yrq182VcEej6rCRl2WJfEOiDZwBbYrfq+cZbDmqdW8CQ1cmeVz7+DiFoz51CSfrMeHG29rxGAzREJBrV6ap+AKJjbCFptzIDiT1JKr+KcCUj5A8x2y7tboH9AfBYMnzOH8pZtjEq8ZhAYpCmpdFvNP8ADuilaHOha222UZfe26cSfD6iY2zYm69Rqov5F1HJS9f8JKYmtNnnbEIbLQvg/Sh0lyNm/cqI+IXD4pZbNN2PBLb8rbhSnwxquzy/tb+61/HtVKZR8mddG9U8DcuybVGGscbkD2TamxQZRquvxhnULT6ZjDPjVSZMR/ZMEJjFvl70gIb6gn1KqD4yTYcgtM+OVn/ks7bEN7SJ/W5yvZ/DIs4pDd/sqMnTNmLuUFpaeXMO/kN9A7utt6jy2VqxfKYBd0bu6c7m3aWuucobZtntAt83e3NypKlp2ZAT0Va4gqwTlGtvG5/2VSvk9aNDxqVvZN/DGTSQOGaw7t034jqp2SlrHD9Zuhvttz56JzwHC5oJtv8ARWuaihk0cxr7bggG3uqapK22i1Q+C7K9hOL1fZNzwPeNjcR+pt06EOJ0N2jdTjWgQva0WBBLW2tYkjQDzv7p3R4awaNYAOXdufS6PUQfML5bggHppujnutpEXH46bHXDF+xMTmgGE5SQSQS67zuB+ty6rMOP47VEvn+AWsYW60dy7Nmym53PdCybjybNPIep09AAt2OtytnMySpyNIR4fltEPX7qY4ZdfEIb/tfZVnCZrMAUjg1bkq4n9Cfqrm+ivR6UpGDKLdEvZQGFYs0tGvJSzq1tr3URmVfG6INbHbm4/ZY4d1p3xfxMSPY2/wApP2WYjf1QhI0fhPCS5rT5K74thDXQkc8v4KJ4ZmHZsy7ABTOMYo1rCb8lwM2R1bO1jjikkZD+b0F385BBad2Q1JtlfI9jQ8i+XUjwSEXGlHGC90zWhvzAmxHmFJ4jYsPkvP3xAohndI0AEGxsLXC3/Iw/Y009NHLwXxTTW0za5viTQht+1a7N8uU5voFVK34jwdrazjGd3WNweVm8wsPpSeqnKaAEarHk+Iq/nTZtx5Uv4o9F4BxnRyxjJK3TcE2cPMFK1nFtKWnLNGcu/fbp56rzyKYJOSAI+q+PBV1/Qvw3y0TvxD4gbVTAR6sjBAP6xO5HhorB8MMLLow87XNvdZ72S2j4ZNH5JF4Zh/qKuieEqUV2+T2y1mlytVdxatDHWuFbasDKqniWDNlfc39ytGOXsoyUtEJjLYKyEwSG2uaNw+aN4BAcOu5BHMErIJHGOZzb5sj3MuBYHK4tvbley3ZvDUQ1sfcrDuIKYx1VRGdC2Z5HkXFzf9JCnaDDf6J2TFHBuUHYd49Lqtz1JDi5pvfe4unNPAJInnNZzSD138E8wDDXSE3nijsQO+LDW4Jv4WHuqplI1OqonuC+JXxMOYBuhFzlIP4hWmgxZkwId2bDrYNJzHxN9j4BDCuDq1rWvLKWVpjzi+S4uLhoOQ3umfEeHTUwBMFNI5xs1kL2iQ7i/dAsNNyqbx7/AEXRk69JvD8ZdC4RyWdmv2T9w4DcX6jokqjF2Ofd2zfq4kABVaimeYw17bEPzsG5BDSDr6rlVJlDBe5dIL+gJ/koKPy0F5NTyNJp48zL7XWU/EGnyvPkfutNwyrHZA+Czj4hSB2Zw9VfjT5GCq2iqUEndTyjdednqommk0TvDpf0zfVX0RXhsGBxOLRZxHqpaeB4Zo93+YqE4arhlAVmkeCxc+vkNPRYoWjG+Mr59TfU7qsM3Vp47/tR5lVRp1W/C9wmVP00/hOpIaG8hsj8TvIa7XkqlgmMlmiksbxHOw+SyXh/PejZGX8dFN7RBM+1QVvAjzNql4waWkF97jqFmnF+JNeHBvO6hG17uq5IM+6uqzPGIj6R2qnqaosFHMpQE8icAqbpPw0RLXo/bUoj5kh2wRe2CrRY0KOlWo/DrE2tp2NcbWLrX/eKyskKVwnF+yblOw2UkyFQbu/FYy0d4e6TZWR75m+4WQjikbXsEszii/NaYroy3j7NdfVx2+ZvuFi3xcp2CpjlZvKxwktsTGWhp87Ot5NCkv8AqYNBc7Ro1J8FUuL8RdPNqLBgAa0/3bgOPrqPZSq1oUY2mRuFT2cW8niyfUsr4JM2tr9Lj1UGDbUcla8Mr43tbnAJ2PUqql+zTjrT90WbDuJoTlDtGi92h72B17aHwVhpmAgzFoaD8gALRbrrqfNV/CW0YcHZRcbHYNuE5xjHWhuhzXFo2i9zfQe5ss7TfSNf2aXbX/BCecDMR1sAPqB6/gq/S13b1OUfKy7df1r2d9rKx4dQEBpk1ebeTbnW3jqqzQ4c6mxCanfq6KVwv+sC7M13q0g+quwpNtmP5NNSl/s0ynpy2O3gsx4zmsS3fMtkiaDGPJY78Qm2l91foxyyrRbJegP6UJWCDujyQw+L9OB4FDRM0XhRpe9rQbXWrU+GR9nYgnTqVnPCdPkc19tlpscoyaEe6x5MHe9Fs0jEvirQCKZmW+V2bc3sQqE06q+fFiuDpmMGuXMT5m2ioDTqtGBNQkyF65dD6GEkghP66UhhB6I+GNBSGPus0qT9Gl0VrMgk7riWh7BnITylqE0eEWN1kOdolNaZKT1GiZGpKI+VJAqMwkSq2x125RmTFN2o4KlxQuTHf5QiunKbOci9oocCTyC3bFOoqgN1c63gNSfRR2cnwRAFdK0iiq2x5V1zpCBs0EadfEqb4mp7Tk20ka148dMp+rVV3LVHYWKugMrReWmHaC274nAdoPG2/oo0icMzswHojU9M6/dNlPw0wISTIcpVX2F/1L9i+HYDUyf91rBzu0/QXVtwPhxkZzPcZXjZzhYD91vLz1KPg9VGY22AD9joFN00gAJPqSs15qfRpjBC7QhO7vxtG75GMaOpLh+Fz6KvcfVQZi9Q8NvldFmtoT+hjupfhWX8rxNrhrFShzvAvtv9vdUzimtE1bUyjUOmfY9Q05B9GhbPjzqezD8qlV6/0aphGKRzQh8bgQRr1aejhyKyz4hH9L7qLp62SI5onujPPKdHDxGx9Uji1c+exfa45gWv6K9ozJaHFM8ZR5D7LmHW/KR4NP3UcyctFihRVWWUO9EkN+G7cOFmQWtspiuIyeiyih4lLG90pPEOMJ3Ny5rDwsrtIp7InjeUGbTldVtp1StbUl7iTqm7SqmXLwn8Lcm3ELtEbD5LJrjktxZJkiEQQQUBizWEmwTl+DyWunnDcAdJryV+qcPaI76bKUzsjVaZkr2EGxQAUxjUIDjZRtlFk0zgR11ou0eB+/8AQXbKSRFsScLrojS7WI+VS0IQLUk0pebQLoiG+6AEHNWt/CauAay+oILCOovlP2WUPar5wCHindIw2LHljTYHKXXcXWOhsLf5lF+oa8Y64iwk0lVJDazL5oehjdq321b/AIUxdGL3PNWOo7SrjMUhc+ojJdCXnV7bAPiDj5Bwv0I5qAronx3Y9pa5mhB3FxfWyy3DT6NuK057HtBKxmqYY/xAS0sYbDnZR1LmllZFmbH2jg3M82Y2/MrSKX4YRxM7eZzppABlZIWiHtOpDdXAfvJRh29sMnyNLSJT4W4GaejdK8d+YFxvvbl+KxWR2pPUk+5Wrw43V0pPaOM0MrXEtOVvZi1mmP8AVH7O1uiySM91bEtGFvb2BzwklyRAbBSEcKSyC99vJLEIpCAHMEo2v7oVLDZNC1SmEOztLTrvZGw0Qbt1xm6XxCPK8hN4tx5qIyy4Xh4cNVHcRUmXULQOD8Oa9uo5Kv8AxCowy9uoTYkUGyCMgoktkngVVkerVX45+jtdURhsnYkJFklWkDjbOVkxcbpq/ZPuxTCoOtuiiq5Mk50hWH5SlAEhTHceBTgK0gHaEZALt0xCFS3uldh1aPJHeEnSbEdCkAYtWq/DKNslDPGB3myl3mHMblPu13ssscFoPwhrLVD4jtLET/ijIsPZ7vZMGXXAKJk8N3AFzCWk7OBHj5WRsYwQSN77GvsLZnt71ht+kbZw9SUOFn9nU1EJ5kPb67/gpDjKsdFTOc3TkUNdiTKTwxwM6WqdIMxhjByZ7EiUjQE7ODb3uOo0FitEZSvhp4qZz+0eSQCL2aHEk2vyaDZSOEUphhijBvlYMxIsXOJu4+5d9Eyilz1TjyYLDw6qKSRJtspvxOlEbHW0DYw1vqbBZI3YLRPjRVW7NnOR7b+TTf8AALO+SkxITeukLhShCAEwu5UAj2QATKl8I+UH1SUmgJ6ApeiFmgeCQxnjTgZTbbkmcHzDzH3TzGGWcHfrD6jf8Ezp/mb5j7pAbjwHEOzVT+K4ABt1H3Vu4GkHZ+ipXxUlBPqPumyCM3QQQUSYsGJ5SRpsFKYdFdZrrSNMTthqhuVhd0H/AAq8rFxAQ2IN5uI08BqfwVdap/H7nZHP1Wg8Bs4Jy08k2IR5H6g9VoKB6iNcjnZN81kxC6Ti0eR1F/ZHCI/RzT6e6AFHBTvBlb2NXTyXsBM1rvKUGI/x3UG5HY4hpI0IsW+BBBB+iANymZkxCFw/7sbmnxsL/gE648bmijj5SSNaf8Rt+KasqBNPh8zdRIxzx5OjzfipbiSDOYAN2TRPPkJG3QIsOIzhjRyH9WUJw609955uKc8TG7ANuZTbA5bwZhzvb7JfoZj3xarc9bHH/wCNpJ83Fx+zR7qsnZKcVVvbV80g2Mjg391vcb9APdJu2TAI3dKFJx7pQoALGNUoixoOckMLOdLdSB+J+yXjcmkj7keA+p/r6paMoA7ijbx3/VI+un8lExHUeYU5lzNLTzSLMN1SYF34ZxfIzfkqrxtW5z5lS2HQWb6Kt8TjUeaGxJEGguIJDJilp7qXoobFNKDZP2vAWTP4bMPpAcTygygA3ytAPgSSftZRbEarkDpHkG4c5xB6i+i40LTjnjKRmyVypsVASU2yUak5irCA9hfcJu896yLTSaINOt0CHaTn2v01RnFcdsgBco8Q0I6g/ZIUzrtHhp7JeA6pgap8MavtmUwJuaZs7HeF3t7P/Q63orxVOuS79uJo/wDY1ZX8H64MnmiP96POzzY7K7+JvstOrJMrIz1ngHvK1DEOOJH3jsNzcenNQldiX5NQTSDQsY4R3/Xd3Wf6iFJ43SFzT3jfVzDoMt76e1hbwWZce4w4wtgvu/M/xyD+ZCEBnbP7Ty0Ug9RtJq8lSLykMKxHRLroKADgpOVyK96Qkk0QM612pThjkwY8Jdsn/CAJCF6mISCAVXY3k7e/JSFPV2AF9kmBZaf5T5Ko8TnUeanoKzRVjH5ruCiMikFy66mInaSTRGxGotG7xFvfRMoJEnikvdaOpv7f8qhrbRoT1LI0JRpI/wB/5otksG38CtBnAHjnp9kSYI+o8Qg5oI0TAQYUcu1SQ3XSkA+uugpJjrhHBTEHo3fMPVOmHVMYnWf56J6EASfC9d2FbE+9h2mV37sncN/LMD6LaeI3EQx2/wDPT/8A0C8/VHzHxA+1ltzMR7eio5dzJJTZxyziRoeP8wcmInuKK3JETz1CwjiSrzyuN/lFh57n7/Ral8QsRAGXUZQSbrF62Um5O7iSfVN9IBLD9yn7imGHJ8SojCuOq4i3QzIAJOmkjuSUlk1KI1AzjD/QS8bx0P8AXVcalYwgBxE70RJPnP8AXJKRpOqHfv1AQBIQP0UJiTu8pSJ2ih653eUWMboLl0ECH0ZSFa67gOgSrSms57xUF6WN9HWI7URqUarSsVCK5qARigBnINUW6PNuk0gFoXJYFN40qCgASnY9FIsdfVRj08onXb5aJgHqNx5K98F4pek7En+wqonjwZI7N/E1/uqHUcvX8FI8NVhjnA5P7rgTobHM36i3qmvSLLHx9ivaOIBvmNhboP6+qodU5SmN1GaU2/u6addz+A9FC1DkUxodYfsnbymlFsnLykARFeUCURxQMaTnvEJWHZJTfMlWFIBVounDUjElQUwFmFKPjzW8Eg0pXPogB0ym0URXU2qlo5jZRtZKbqOhjHsEEtnQTEcCay7nzQQUJJ14GalGoIKwgHXSgggBrLuk0EEgFGI64ggAFOMP5oIIAVqeX9ckKb52fvN/iCCCBAqfmd+87+IphKuoJsB1Rpw9cQQAQohQQQMbTb+iVZsgggBaNKIIIEGaleSCCBi0eyj6nddQSAQQQQQB/9k=",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio, numquam voluptatem ipsa, temporibus maiores cumque soluta placeat labore autem rerum eveniet nihil molestias cum?",
      author: "romy",
      stars: <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>,
    },
    {
      id: 5,
      image:
        "data:image/jpeg;base64,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",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio, numquam voluptatem ipsa, temporibus maiores cumque soluta placeat labore autem rerum eveniet nihil molestias cum?",
      author: "denial smith",
      stars: <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>,
    },
    {
      id: 6,
      image:
        "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt distinctio, numquam voluptatem ipsa, temporibus maiores cumque soluta placeat labore autem rerum eveniet nihil molestias cum?",
      author: "stiven brown",
      stars: <span>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="review">
      <div className="review-contain">
      <h2><br /> <span style={{color:"white", fontSize:"3vw"}}> Customer Reviews</span></h2>
        <Slider {...settings}>
          {review.map((item, index) => (
            <div className="review-card" key={index}>
              <div className="text">
                <span>{item.stars}</span>
                <h4>{item.author}</h4>
                <p>{item.text}</p>
              </div>
              <div className="image">
                <img src={item.image} alt="client" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
