import React, { useState } from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {

  const [posts, setPosts] = useState([
    {
      user : "Sathya_",
      postImage: "data:image/jpeg;base64,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",
      likes: 100,
      timestamp : "4d",
    },
    {
      user : "Narayan_",
      postImage: "data:image/jpeg;base64,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",
      likes: 100,
      timestamp : "3d",
    },
    {
      user : "_Hari",
      postImage: "data:image/jpeg;base64,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",
      likes: 1001,
      timestamp : "1d",
    },
    {
      user : "_Hari",
      postImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xAA3EAABAwMDAgIHBwQDAQAAAAABAAIDBBEhBRIxBkETURQiMmFxgZEHI0JSobHBM2LR8FOC4RX/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBBQD/xAAjEQACAwACAgMBAAMAAAAAAAAAAQIDERIhBDETQVEiMmFx/9oADAMBAAIRAxEAPwDyRjsIjJHxm7HEKIwozX9iqFJoicS4pNXnYQCcK/odUZMAH4WLadpUlkpGQbKuvyGR2+NF+jftAeLtyPcnbFltK1V8cgZIcLWwvbNG1ze4VsZ8kc6dTg8BGMJeGpG1dDEWi+IqagMzLi5QJqYxusQrahnEVgTYJ9aI5ctS+cuQ/wCGDhq9lD4S6I1MdFYppjTeRK4EURpeGpXhlOELjkDC85GqBD8Nd2KZFDvka3zKvxoDHxBx5t2S52qPsdV48rO0ZZoLTcYKn02oSwiwJUvUNMbTcFQJIgBcLNjNaHxnUyaNUncLXKBJWOOXC5QontY2xTJXNdkIeC0a7ZZ2wUrw83tlBsjbUx4DckpnoR3Lsbt80kP0hhJAPCSB2RX2OVUmvR5eugpgTrrkadtoIHlObIQUxowuhamC0ibFIHZvlX+jax4B2SnCyzPVKmRuuFRCxr0SW1JnodPqFPMMPbdTWFrh6puvNYpnxm7XEfBXWl6zNE8CV12+apjdvsjlR+Gy2roCVJK2piD2EI2xN5IRxaA7V3YjCI3AAJJ4FuUV1PJE4CVjmk/mFlnNGquT7w5Q6c+rdZuFeyaQykojcZtdSNDiEMW/zTtTrBKNjVLO2Tli9HRqohCvX7ZkY2uZUFwF83VtLqzxEGC4NlYQ0sLYS8gXI4USSla524tACN2Rk+0KjTOtfy/ZTzyzT5IJCilq0TvAZCW2F1RVD2McSmwmhFtbX3oBzQBdRJqiNnfKZX1jS0tjOVUDDryOysnbno2vx97ZJqdSc02aFClrZZTtvZNqCHn1AmNgkFnWSXY2VKpL6JUTNjdzjkpKHM+W1rWSSW9KOWdIxq4u7wQkMqYpHNf5roKbcJwFwiBaHbkSKSxQLELoK1MFx0nh1xcIsUjrhjQS4mwAFySeyJ03ps+uatTabSkB8zsuIuGNGS4/AL3XROmdB6Vs6mhE1YG3dUy+s/5flHwXpXKHsyrxpWPoouiukaylpW1WvyGCM+xSj27f3Ht8OVL1jqTQdLmdEY4gW9ttyqPrXrp0ZkhpT7OC7yXk75KrWtSEbXF0srrXdwB5lSuyy1+8R0IUU0Ltaz1DUftWjidaiiLy0WBI4CoaX7Q3Pr5qjVI55Q8AMbGG2b9Sj0PQLadmypkdOSAXeG2xb8+G/qfhwhalouhUhMQ8DxPJ0rnO/dMqjwfL7Ats+SLjiw0mmfaPos4bE+aSmJwPGYQPqLhaFtUyZokYWva4XDmm4IXjNbosI/o3ZfIzuaf5RundWren5SGuL6e95aYnBH5mn/feqY2d9kM6dX8s9j9LLRYXTJazbGSTZUX/AN6llpmVFO/cyRt2nuqms1t8wLWYCo69okUpemW1bqrW3DSCs9XVz5rhp+SbG2SYjdwpcdPFEzfJa6FzDVe9lMPEa/1gbFWENOyZlyQg1lRGfVaLqNDM5oIBssfYSyLLEU0cWfJTYWRyxnCqYpTJ6pdhTBKKeIkG5S5dDo4Oq6aNsd7clJZ+urp5nkNJABSQaebRjrFPBXbIjY7oEh7Y0M3HCRDm9lodAp6MxOMxbuBzu8k3waUVJbjZfHwXl2e/6UF3FF8I4ACvpaWiDxa3wRtK01moanBR0w3ySvDGge//AByt6wHO8Nn9jXTzohV69UDaHNMFOCMkXu4/UAfIq46z1Y0tPM5mHEbRla6Omi0vTIaOlFo4WbW+dh3+fK8o6+qt07Iycclc+T5zOnVHhA8/1icmoc153AWIv71cdCUe6Z9Zje1wZGSMB3N/kMqhrGOl9JqLercNC13RzCzRYZI/a3PNvM3/APFSv5RLOXNsk9VdX1s8LOltDIigZIfHlafvJpDyNx4F+f8AAS0b7Lqirc1uoVbKQuGbM8Qt95yB8v1WN0WN9TVPfuBkLd3rHkk5yvUdC1XW6WibRvMMkQ/pvedzmDy+CqqrTWs599zhLimY3X+m9R6PlYXyNqKCV1hIzAJ8i032usg1sZr6Fr+7W/cv223cnP1N1purJKqq0yq9OeJAGEgdmkcWA96ymmkx0ETpB7MzgB5i3+UFseA+ifNawPTdW68lM4nbbe0Ht5q6Mizejjdrhazi77fBac07rXTqpNxJfIhk+gnpxjYA0KPJVyP5Nk007gk2DzTMFa2CEucpPmBwAnvhAOEOWGzcYQs1HW1Dmn1TlF8WSQWJwoXhuCkQB3dKmpP0g4NfonuDBwknys3JJXGf4P5IyV04FDTgt0Y0Fa4g3CJuJ5yghPaUxMU0GaV659j3TZZG7qCqbYyAx0gI/D+J3z4Hz815LSRGpqYqdvtTSNjHxcbfyvp6nbFSU0FNC0NiiYGRgDgAWCT5NvGPH9H+NTyly/AOqvZHTuJPZeI9av8AErgQb2BXq/UNSHNcAey8a6il3VzgeAo63sjoy1QIHgCXTXRAes5mPjyudL6maeCSmeT6rtwbe2O/++9Foz9y33Ku1KkkgmNZTX23u634T5rp217BNHGou42yjL7Y6qY+hr/SKdt43OLm2ONpyW39y0+na7C6DxvG8MRjIlaQB8CBn6rOM1Rs9NHGRHG8Atdu9mTyTYxEXZo2XH5XlKjZKKxD7KIzes0hq5daf4VNG+bddzC4bN1s3A/KOS51gFUarNT07IqelkbLDTx/1WezI85JHz4Q315p6d8HjMggkAD4YR/UtxuOXO+Zt7gq1jZ9TqGwwMNvLy/uKCTlNhKMYLEWHSFM51XNVEXaxuwH+4/7+q1ZGOFFoaVmn0rKeLhvLvzHuUR8tuSra48Y4Q2z5y0UmFGecp8k7bYUYy35TUIkOPCESnF2EFzl4w6XJzXKO59iutkQsKIdz0kAnzNkkA3TN2XQFIEa6IblRcizAAyni3dShTJwpR5I1IWyz6DhbUdX6VG4XaJt5/6tLv4Xv8xJY0AXIbleN/ZjRg9TCYW+6gefrYfyvYnP2wuJUHlS2eHR8NZDTMa193C58hzZeTa3KJ62RzexwvSOqpJHxkDj4ry6tAFQ8Ar1A+59CoZRbwiLOH6qxjkAwqV7M3adpBuCOyl09Y6wYYfEeOXA2C6tVy45I4nkeLJy5Q+wOpUFILy2MLndm5v8lTup5OGtx58LS0tKayuiZO/1pHhp/tCvOvK2he2koqKGNjYBt3tbm1lLdauXSLvHolGH9swMdK88kNHuUuke+jlD6d5B75wVNoNOkqyXuuIwebc/BXsGmU8cQ2taLdyMrYQnLtAzthDrNIzdSL2tc4G5HmuurmOGWkqS+CBjbuAuoh8Ej1bXVyfRypezrKmMjDSmPflCY0B5xZJ13uICPRb1jjILcIJ55XHghDJIC9p7AjsrrGlRzIQiRSkmxQNjEgzmEfiXFyQbuHYSQ6NxEaONoGVIjjjObqQ2hLfa+iaIQ11rLmcy3AYDL8JzmNIwmvis6zAT705sTgcolLTMN79lVJaSuqSLkbGA/Un9gtxqEvhwEnH8qh6BphS6GHFtnzuLjj5D9lZ63I3wNp8rkBQWPZtnVphxgkY7X6pzoJA0i47Lz2tqfFeQGgWK1OqF75HtAcM5sVkK2J0U5aLnvxwn0g3f6BNNz5KS2QMGFEaCPNGvCYzuc/f5DhU6TE+WSClEckUzpJxY2As1pRqDTn1sgqKzLXZ28blF0uidO4yuafDafqr1vigC37LYrvWKtsf+KJpDGxhoaAGiwsob5CDYYRGNle298LoBHtfsnKf0RuG9kYsY72soXo8V8YU8AO4AshSRk4AC35AeAB8MLWqMWsb7Kmtp3X9ZKSNg7IlYY4IrC1t7nlNLAeArJ0LCOLIfgtHde+Q9wK2SG5wmeAQLkKzEIvwnmIEZC98h74ynIscpK09GYebJL3yBKsvJKJs4O3BVdV6NPksJV5B2Uw8KTgi1pMxT6aWmO6Yix496m6bHExzavVmTNo7OI8NubgYGAfPODa1u6brudRz/AMgHyW06nY2PpfT2xtaxvpMRs0WHtgfthGoLi2AsU0v00mjff6VTufG2J5haS0C1seSjagC6/wCa2bHlWkxIEVseoePgs/Wk735PJ/lcn7OxEpa6CGNznusccLPVrIGsMoZ63v4CtNTc4lhLj27rPdREiBtiRjsnw9gyKGvqDJIWi1geyFRwGeZrR5oHdW2m8OPdVpEM31pooI2RxMYz2Wiye57Q3hRYCVJACbpD7fZxk/ZJ7y4YQhyiNWGnWRvLU5sTu5Ro/YSCzQsIUpkY/nCfZsjbkJ70xnslb9GZ2Dkc0DCHuba5KdLwUz8IQ6zcR3xGHHCTgCLhyju4XIivabgfaXcFJKJJZrPYf//Z",
      likes: 1001,
      timestamp : "1d",
    },
  ]);

  return (
    <div className='timeline'>
        <div className='timeline__left'>
          <div className='timeline__posts'>
              {posts.map(post => (
                 <Post 
                  user={post.user} 
                  postImage={post.postImage} 
                  likes={post.likes} 
                  timestamp={post.timestamp} />
              
               ) )}
          </div>
        </div>
        <div className='timeline__right'>
            <Suggestions/>
        </div>

    </div>
  )
}

export default Timeline