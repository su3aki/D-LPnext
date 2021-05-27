import React from 'react'
import Head from 'next/head'
import Header from './header'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function recruit() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1e1022'
      },
      secondary: {
        main: '#7f5af0'
      }},
  })
  theme.typography.h2 = {
    fontSize: '1.6rem',
  '@media (min-width:800px)': {
    fontSize: '3.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4.2rem',
    },
  }
  theme.typography.h3 = {
    fontSize: '1.3rem',
  '@media (min-width:800px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.8rem',
    },
  }
  theme.typography.h5 = {
    fontStyle: 'italic',
    fontSize: '1.2rem',
  '@media (min-width:800px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
  }
  theme.typography.h6 = {
    fontSize: '1.0rem',
  '@media (min-width:800px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  }
  theme.typography.subtitle1 = {
    color: '#fff',
    fontSize: '1.2',
    '@media (min-width:800px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
    },
  }
  theme.typography.subtitle2 = {
    color: '#94a1b2',
    fontSize: '0.8',
    '@media (min-width:800px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>DiAXS 応募ページ</title>
        <meta name="description" content="DiAXS プロゲーマー　ストリーマー応募ページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <Header />
        <main className={styles.main}>
          <article>

            <section className={styles.titleArea}>
                <br></br>
              <br></br>
              <Typography variant="h2" className={styles.animate}>
                <span>日</span><span>本</span><span>の</span><span style={{ color: '#2cb67d'}}>e</span><span>-</span><span>s</span><span>p</span><span>o</span><span>r</span><span>t</span><span>s</span><span>を</span><span>世</span><span>界</span><span>へ</span>
              </Typography>
              <Typography variant="h6" className={styles.description}>
                D<span style={{ color: '#2cb67d'}}>i</span>AXS社で共に世界で活躍する、VTuber<span style={{ color: '#2cb67d'}}>&</span>プロゲーマー大募集！
              </Typography>
              <Link href='https://docs.google.com/forms/d/e/1FAIpQLSeEKTPU-BoPBfqaQ4FLa97T05MM0BecS4nXO_GVR_p_0lLO7w/alreadyresponded'>
                <Button variant="contained" color={'secondary'} style={{fontSize:"30px"}}>
                  応募する
                </Button>
              </Link>
            </section>
            <section className={styles.contents}>
              <Typography variant="h3" className={styles.contentsTitle} style={{ fontStyle: 'italic', textAlign: 'center' }}>
                  D<span>i</span>AXS Gamingの<span>強力</span>なサポート体制
              </Typography>
              <Typography variant="subtitle1" className={styles.contentsDescription}>
                あなただけのVRキャラがもらえる！
              </Typography>
              <Typography variant="subtitle1" className={styles.contentsDescription}>
                プロゲーマーとして世界が狙える！
              </Typography>
              <Typography variant="subtitle1" className={styles.contentsDescription}>
                芸能活動のバックアップ！
              </Typography>
              <Typography variant="subtitle1" className={styles.contentsDescription}>
                新たな自分の稼ぎ方が見つかる！
              </Typography>
              </section>
            <section className={styles.playerStreamerBG}>
              <section className={styles.playerStreamer}>
                <Typography variant="h2" style={{ fontStyle: 'italic'}}>
                  ―<span style={{ color: '#2cb67d'}}>P</span>ro Player
                </Typography>
                <Typography variant="subtitle2" >
                  17歳〜26歳で<span style={{ color: '#7f5af0'}}>ゲーム</span>で稼ぎたくて本気でゲームと向えるスキルのある方。性別不問！
                </Typography>
                <Typography variant="h2" style={{ fontStyle: 'italic',textAlign: 'right'}}>
                  <span style={{ color: '#2cb67d'}}>S</span>treamer ―
                </Typography>
                <Typography variant="subtitle2" style={{ textAlign: 'right'}}>
                  年齢性別問わず、<span style={{ color: '#7f5af0'}}>ゲーム</span>が大好きでゲームで稼ぎたい方。
                </Typography>
              </section>
            </section>
            <section className={styles.recruitFlow}>
              <Typography variant="h2" style={{ fontStyle:'italic',textAlign: 'center'}}>Sc<span>h</span>edule</Typography>
                <div className={styles.phaseHeaders}>
                <Typography variant="h5" className={styles.title}>
                  Phase.<span>1</span>
                </Typography>
                <Typography variant="h6">
                  web書類審査
                </Typography>
                </div>
                <Typography variant="subtitle2" style={{ textAlign:'right'}}>
                  合格者のみに二次選考の詳細メールをお送りいたします。
                </Typography>
                <div className={styles.phaseHeaders}>
                <Typography variant="h5" className={styles.title}>
                  Phase.<span>2</span>
                </Typography>
                <Typography variant="h6">
                  ビデオ通話面談
                </Typography>
                </div>
                <Typography variant="subtitle2" style={{ textAlign:'right'}}>
                  合格者のみ1週間以内に最終選考の詳細メールをお送りいたします。
                </Typography>
                <div className={styles.phaseHeaders}>
                <Typography variant="h5" className={styles.title}>
                  Phase.<span>3</span>
                </Typography>
                <Typography variant="h6" >
                  最終選考
                </Typography>
                </div>
                <Typography variant="subtitle2" style={{ textAlign:'right'}}>
                  ストリーマー：ビデオ通話最終選考
                <br></br>
                  大会メンバー：プレイング選考
                </Typography>
            </section>
            <section className={styles.submit}>
              <Typography variant="h4" style={{textAlign: 'center' }}>あなたのご応募お待ちしております！</Typography>
              <Link href='https://docs.google.com/forms/d/e/1FAIpQLSeEKTPU-BoPBfqaQ4FLa97T05MM0BecS4nXO_GVR_p_0lLO7w/alreadyresponded'>
                <Button variant="contained" color={'secondary'} style={{fontSize:"30px"}}>
                  応募する
                </Button>
              </Link>
            </section>
            <section className={styles.qAndA}>
                <Typography variant="h2" style={{fontStyle: 'italic', textAlign: 'center' }}>Q<span>&</span>A</Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                  </span>合格後もらえるVRキャラクターのデザインは自分で選べますか？</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      専属クリエイターさんがいますのでご自身の意見やイメージを伝えながらしっかりと作り上げていくことが可能です！
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                  </span>合格後VRのキャラクターが手に入り、芸能のお仕事もあると書いてあるのですがどのようなお仕事がありますか？</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      弊社では別途声優番組を制作したり楽曲制作等行えるスタッフが内部にいます。その為声優活動や、音楽活動など基本的にご自身のやりたい芸能活動をご提供できます。
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                  <Typography variant="h6">
                    <span>Q.
                  </span>学業や仕事を別でしながらでも大丈夫ですか？
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      ストリーマー部門であれば、問題ありません！マネージャーと相談し、配信ペースなどを決めていただけます！
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                  </span>合格し、所属となった場合給料はどんな形態でもらえますか？
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    個人の能力等で変わるので契約時に相談、確認して決めるといった形です。
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                      </span>ゲーム配信者を夢見ているのですが、向いているかわかりません。
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      人には向き不向きがあります。プロからストリーマーに転向した方、その逆もまたいます。活動していく内に「自分の方向性」を見つければ良いので、最初から決めておく必要はありません。
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                  </span>現在参加予定の大会はありますか？
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      DiAXS社が主催する大会や、Vtuber杯、その他多数の大会参加予定です！常にプレイヤーがチャレンジできる機会を我が社でも作っていきたいと思っています！
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography variant="h6"><span>Q.</span>
                    合格したら必ず所属しなければならないですか？
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      オーディションに合格しても、必ず所属する必要はありません。基本的に、どの事務所でも「合格後」約一週間程度、検討する期間が与えられます。最終的に所属するかどうかは、自分に決定権があります。
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                  </span>ゲームは好きなのですが未経験でも大丈夫ですか？
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      ストリーマー部門であれば問題ありません！ゲームが大好きな気持ちが何より大切です！合格後DiAXS社でしっかりとサポート致しますのでお気軽にご参加ください！
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                  </span>年齢的に少し遅いかもしれないのですが大丈夫ですか？
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      声を仕事にするVtuberや、自身のスキルを職業にするeスポーツ選手はある程度年齢に縛られずチャレンジすることができるので問題ありません！
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography variant="h6"><span>Q.
                  </span>オーディションに応募しようか迷っています
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      オーディションは、夢への橋渡しをしてくれる大切な場所です。eスポーツチームに入るには「スカウトを受ける」という方法もありますが、スカウトは「待ち」の状態で「運」に左右されてしまいます。一方オーディションは「攻め」の状態なので、自分次第でいくらでもチャンスを作ることができます。例え落ちても次がありますので、あまり気負わず気楽に挑戦してみてください。
                    </Typography>
                  </AccordionDetails>
              </Accordion>
        </section>
        </article>
        </main>
        </ThemeProvider>
    </div>
  )
}
