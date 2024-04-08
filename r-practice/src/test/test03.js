import React from 'react'

function Book () {
    let info = {
        title: '해리포터',
        author: '조앤K롤링',
        summary: '해리포터가 마법사로 성장해나가는 과정을 그린 이야기',
        genre: '판타지 소설',
        release: '2003년 9월 4일',
        ISBN: '1234567890'
   }
   const {title, author, summary, genre, release, ISBN} = info

   return(
    <>
        <h1>도서 정보</h1>
        <h4>제목 : {title}</h4>
        <h4>저자 : {author}</h4>
        <h4>줄거리 : {summary}</h4>
        <h4>장르 : {genre}</h4>
        <h4>출판일 : {release}</h4>
        <h4>ISBN : {ISBN}</h4>
    </>
   )
}

export default Book