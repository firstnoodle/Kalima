interface Character {
    id: number;
    ipa: string;
    latinSymbol: string;
    name: string;
    englishApproximation: string;
    insta: string;
    video: string;
    vowel: boolean;
    arabic: boolean;
    persian: boolean;
    variants: {
        isolated: string;
        final: string;
        medial: string;
        initial: string;
    };
}

interface Word {
    id: number;
    sorani: string;
    english: string;
    ipa: string;
}

export const alphabet: Character[] = [
    {
        id: 1,
        ipa: '[aː]',
        latinSymbol: 'a',
        name: 'Elif',
        englishApproximation: '<p>f<strong>a</strong>ther</p>',
        insta: 'https://www.instagram.com/p/CCxiGJTnqPj/?igshid=10p4diinreu1d',
        video: 'https://www.youtube.com/watch?v=7FEaBhuM4b0&t=7s',
        vowel: true,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ا',
            final: 'ـا',
            medial: 'ـا',
            initial: '—',
        },
    },
    {
        id: 2,
        ipa: '[b]',
        latinSymbol: 'b',
        name: 'Be',
        englishApproximation: '<p><strong>b</strong>oy</p>',
        insta: 'https://www.instagram.com/p/CCxv6vwHjrJ/?igshid=1fc2ed7kyty70',
        video: 'https://www.youtube.com/watch?v=W5nBRnlctwY&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ب',
            final: 'ـب',
            medial: 'ـبـ',
            initial: 'بـ',
        },
    },
    {
        id: 3,
        ipa: '[d͡ʒ]',
        latinSymbol: 'c',
        name: 'Ce',
        englishApproximation: '<p><strong>j</strong>uice</p>',
        insta: 'https://www.instagram.com/p/CCy-SK3HeL1/',
        video: 'https://www.youtube.com/watch?v=zZRSSXMurro&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ج',
            final: 'ـج',
            medial: 'ـجـ',
            initial: 'جـ',
        },
    },
    {
        id: 4,
        ipa: '[t͡ʃ]',
        latinSymbol: 'ç',
        name: 'Ch',
        englishApproximation: '<p><strong>ch</strong>est</p>',
        insta: 'https://www.instagram.com/p/CC0IpMmHR9t/',
        video: 'https://www.youtube.com/watch?v=J5RYdw_0CL0&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'چ',
            final: 'ـچ',
            medial: 'ـچـ',
            initial: 'چـ',
        },
    },
    {
        id: 5,
        ipa: '[d]',
        latinSymbol: 'd',
        name: 'Dal',
        englishApproximation: '<p><strong>d</strong>og</p>',
        insta: 'https://www.instagram.com/p/CC1BZcFHLkQ/',
        video: 'https://www.youtube.com/watch?v=dwKWvT50_o0&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'د',
            final: 'ـد‎',
            medial: 'ـد‎',
            initial: 'د‎',
        },
    },
    {
        id: 6,
        ipa: '[ɛ]',
        name: 'E',
        latinSymbol: 'e',
        englishApproximation: '<p>b<strong>e</strong>d</p>',
        insta: 'https://www.instagram.com/p/CC_4P_Rn2Rx/',
        video: 'https://www.youtube.com/watch?v=fy4Br68Urwg&t=7s',
        vowel: true,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ە',
            final: 'ـە',
            medial: 'ـە',
            initial: 'ە',
        },
    },
    {
        id: 7,
        ipa: '[eː]',
        name: 'ê',
        latinSymbol: 'ê',
        englishApproximation: '<p>p<strong>ay</strong></p>',
        insta: 'https://www.instagram.com/p/CDDphkKHx-5/',
        video: 'https://www.youtube.com/watch?v=Rf7juiYd8lM&t=7s',
        vowel: true,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ێ',
            final: 'ـێ',
            medial: 'ـێـ',
            initial: 'ێـ',
        },
    },
    {
        id: 35,
        ipa: '[ʕ]',
        name: 'Eyn',
        latinSymbol: "(')",
        englishApproximation: '3',
        insta: 'https://www.instagram.com/p/CC3v_oDnEpW/',
        video: 'https://www.youtube.com/watch?v=m2WKf_AtUlU&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ع',
            final: 'ـع',
            medial: 'ـعـ',
            initial: 'عـ',
        },
    },
    {
        id: 8,
        ipa: '[f]',
        name: 'Fe',
        latinSymbol: 'f',
        englishApproximation: '<p><strong>f</strong>oot</p>',
        insta: 'https://www.instagram.com/p/CC585ekHWub/',
        video: 'https://www.youtube.com/watch?v=MYhNt-MgJ-c&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ف',
            final: 'ـف',
            medial: 'ـفـ',
            initial: 'فـ',
        },
    },
    {
        id: 9,
        ipa: '[ɡ]',
        name: 'Gaf',
        latinSymbol: 'g',
        englishApproximation: '<p><strong>g</strong>ood</p>',
        insta: 'https://www.instagram.com/p/CC8-qfQHroU/',
        video: 'https://www.youtube.com/watch?v=5YiAj9mLE_4&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'گ',
            final: 'ـگ',
            medial: 'ـگـ',
            initial: 'گـ',
        },
    },
    {
        id: 10,
        ipa: '[h]',
        name: 'He',
        latinSymbol: 'h',
        englishApproximation: '<p><strong>h</strong>ope</p>',
        insta: 'https://www.instagram.com/p/CC_1PtfHwTX/',
        video: 'https://www.youtube.com/watch?v=Y3UnCmcaJOQ&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ھ',
            final: '—',
            medial: 'ـھـ',
            initial: 'ھ',
        },
    },
    {
        id: 11,
        ipa: '[ħ]',
        latinSymbol: 'ḧ', // On insta this letter is used: H'
        name: `H'e`,
        englishApproximation: '<p>somewhat like <strong>h</strong>ope</p>',
        insta: 'https://www.instagram.com/p/CC0thornH6O/',
        video: 'https://www.youtube.com/watch?v=RbVnTjuFixE&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ح',
            final: 'ـح',
            medial: 'ـحـ‎',
            initial: 'حـ',
        },
    },
    // {
    //     id: 12,
    //     ipa: '[ɨ]',
    //     latinSymbol: 'i',
    //     englishApproximation: '<p>s<strong>i</strong>t</p>',
    //     video: '#',
    //     vowel: true,
    //     arabic: true,
    //     persian: true,
    //     variants: {
    //         isolated: '—',
    //         final: '—',
    //         medial: '—',
    //         initial: '—',
    //     },
    // },
    {
        id: 13,
        ipa: '[iː]',
        name: 'Ye',
        latinSymbol: 'î,y',
        englishApproximation: '<p>s<strong>ee</strong></p>',
        insta: 'https://www.instagram.com/p/CDCZccRn_Ym/',
        video: 'https://www.youtube.com/watch?v=7c1j7Npi5_I&t=7s',
        vowel: true,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ی',
            final: 'ـی',
            medial: 'ـیـ',
            initial: 'یـ',
        },
    },
    {
        id: 14,
        ipa: '[ʒ]',
        name: 'Je',
        latinSymbol: 'j',
        englishApproximation: '<p>s<strong>ee</strong></p>',
        insta: 'https://www.instagram.com/p/CC27YgTnMkC/',
        video: 'https://www.youtube.com/watch?v=Q-idnJwQcbg&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ژ',
            final: 'ـژ',
            medial: 'ـژ',
            initial: 'ژ',
        },
    },
    {
        id: 15,
        ipa: '[k]',
        name: 'Kaf',
        latinSymbol: 'k',
        englishApproximation: '<p>s<strong>k</strong>in</p>',
        insta: 'https://www.instagram.com/p/CC85P7pHR-g/',
        video: 'https://www.youtube.com/watch?v=j8PnsSL2RgI&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ک',
            final: 'ـک',
            medial: 'ـکـ',
            initial: 'کـ',
        },
    },
    {
        id: 16,
        ipa: '[l]',
        name: 'Lam',
        latinSymbol: 'l',
        englishApproximation: '<p><strong>l</strong>ip</p>',
        insta: 'https://www.instagram.com/p/CC9L0MFnarw/',
        video: 'https://www.youtube.com/watch?v=p8i2X8kFHf8&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ل',
            final: 'ـل',
            medial: 'ـلـ',
            initial: 'لـ',
        },
    },
    {
        id: 17,
        ipa: '[ɫ]',
        name: 'Lami',
        latinSymbol: '(l), LL',
        englishApproximation: '<p>pi<strong>ll</strong></p>',
        insta: 'https://www.instagram.com/p/CC9bxeNnYcR/',
        video: 'https://www.youtube.com/watch?v=NvmQuSGq53c&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ڵ',
            final: 'ـڵ',
            medial: 'ـڵـ',
            initial: '—',
        },
    },
    {
        id: 18,
        ipa: '[m]',
        name: 'Mim',
        latinSymbol: 'm',
        englishApproximation: '<p><strong>m</strong>oon</p>',
        insta: 'https://www.instagram.com/p/CC-vf-OH7eS/',
        video: 'https://www.youtube.com/watch?v=gJaAZo0L2PY&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'م',
            final: 'ـم',
            medial: 'ـمـ',
            initial: 'مـ',
        },
    },
    {
        id: 19,
        ipa: '[n]',
        name: 'Nun',
        latinSymbol: 'n',
        englishApproximation: '<p><strong>n</strong>ap</p>',
        insta: 'https://www.instagram.com/p/CC-868Vn7bI/',
        video: 'https://www.youtube.com/watch?v=YoZfMMEqgug&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ن',
            final: 'ـن',
            medial: 'ـنـ',
            initial: 'نـ',
        },
    },
    {
        id: 20,
        ipa: '[o]',
        name: 'O',
        latinSymbol: 'o',
        englishApproximation: '<p>sh<strong>o</strong>re</p>',
        insta: 'https://www.instagram.com/p/CDBXfMKHGim/',
        video: 'https://www.youtube.com/watch?v=I4kLLlLMDmY&t=7s',
        vowel: true,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ۆ',
            final: 'ـۆ',
            medial: 'ـۆ',
            initial: 'ۆ',
        },
    },
    {
        id: 21,
        ipa: '[p]',
        latinSymbol: 'p',
        name: 'Pe',
        englishApproximation: '<p>s<strong>p</strong>in</p>',
        insta: 'https://www.instagram.com/p/CCx5YjVnXUD/',
        video: 'https://www.youtube.com/watch?v=ekoUiiyjw0A&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'پ',
            final: 'ـپ',
            medial: 'ـپـ',
            initial: 'پـ',
        },
    },
    {
        id: 22,
        ipa: '[q]',
        name: 'Qaf',
        latinSymbol: 'q',
        englishApproximation: '<p><strong>c</strong>all (but further back in the throat</p>',
        insta: 'https://www.instagram.com/p/CC8vH3MHfJu/',
        video: 'https://www.youtube.com/watch?v=Dp3Jf14MjZU&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ق',
            final: 'ـق',
            medial: 'ـقـ',
            initial: 'قـ',
        },
    },
    {
        id: 23,
        ipa: '[ɾ]',
        latinSymbol: 'r',
        name: 'Re',
        englishApproximation:
            '<p>bu<strong>tt</strong>er (American English)</p>',
        insta: 'https://www.instagram.com/p/CC1f7FBnmKw/',
        video: 'https://www.youtube.com/watch?v=8sRlIMTyHYs&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ر',
            final: 'ـر',
            medial: 'ـر',
            initial: '—',
        },
    },
    // {
    //     id: 24,
    //     ipa: '[r]',
    //     latinSymbol: '(r)',
    //     englishApproximation: '<p>rolled r</p>',
    //     video: 'https://www.youtube.com/watch?v=sgMrmGTz9ms&t=7s',
    //     vowel: false,
    //     arabic: true,
    //     persian: true,
    //     variants: {
    //         isolated: 'ڕ',
    //         final: 'ـڕ',
    //         medial: 'ـڕ',
    //         initial: 'ڕ',
    //     },
    // },
    {
        id: 25,
        ipa: '[s]',
        name: 'Sin',
        latinSymbol: 's',
        englishApproximation: '<p><strong>s</strong>ip</p>',
        insta: 'https://www.instagram.com/p/CC3ajrgHrUV/',
        video: 'https://www.youtube.com/watch?v=rHTBb_2ME5g&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'س',
            final: 'ـس',
            medial: 'ـسـ',
            initial: 'سـ',
        },
    },
    {
        id: 26,
        ipa: '[ʃ]',
        name: 'Shin',
        latinSymbol: 'ş', // on insta: sh
        englishApproximation: '<p><strong>sh</strong>ip</p>',
        insta: 'https://www.instagram.com/p/CC3llhsnHre/',
        video: 'https://www.youtube.com/watch?v=yxFQ0Na85Gk&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ش',
            final: 'ـش',
            medial: 'ـشـ',
            initial: 'شـ',
        },
    },
    {
        id: 27,
        ipa: '[t]',
        name: 'Te',
        latinSymbol: 't',
        englishApproximation: '<p>s<strong>t</strong>op</p>',
        insta:'https://www.instagram.com/p/CCyv9JWnINJ/',
        video: 'https://www.youtube.com/watch?v=j04rDZX48TU&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ت',
            final: 'ـت',
            medial: 'ـتـ',
            initial: 'تـ',
        },
    },
    {
        id: 28,
        ipa: '[u]',
        name: 'Waw',
        latinSymbol: 'u,w',
        englishApproximation: '<p>p<strong>u</strong>ll</p>',
        insta: 'https://www.instagram.com/p/CC_7r-CnQ13/',
        video: 'https://www.youtube.com/watch?v=I4kLLlLMDmY&t=7s',
        vowel: true,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'و',
            final: 'ـو',
            medial: 'ـو',
            initial: 'و',
        },
    },
    {
        id: 29,
        ipa: '[uː]',
        name: 'û',
        latinSymbol: 'û',
        englishApproximation: '<p>m<strong>oo</strong>n</p>',
        insta: 'https://www.instagram.com/p/CDBBcx5nwBV/',
        video: 'https://www.youtube.com/watch?v=02xWfJ6WW20&t=7s',
        vowel: true,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'وو',
            final: 'ـوو',
            medial: 'ـوو',
            initial: '—',
        },
    },
    // {
    //     id: 30,
    //     ipa: '[yː]',
    //     latinSymbol: '?',
    //     englishApproximation: '<p>somewhat like c<strong>u</strong>te</p>',
    //     video: '&t=7s',
    //     vowel: false,
    //     arabic: true,
    //     persian: true,
    //     variants: {
    //         isolated: 'ۊ',
    //         final: '—',
    //         medial: '—',
    //         initial: 'ـۊ',
    //     },
    // },
    {
        id: 31,
        ipa: '[v]',
        name: 'Ve',
        latinSymbol: 'v',
        englishApproximation: '<p><strong>v</strong>ase</p>',
        insta: 'https://www.instagram.com/p/CC8YFADHcPK/',
        video: 'https://www.youtube.com/watch?v=RhNntT_H8W4&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ڤ',
            final: 'ـڤ',
            medial: 'ـڤـ',
            initial: 'ڤـ',
        },
    },
    {
        id: 32,
        ipa: '[x]',
        latinSymbol: 'x',
        name: 'Xe',
        englishApproximation: '<p>Scottish lo<strong>ch</strong></p>',
        insta: 'https://www.instagram.com/p/CC0ufO-H9CX/',
        video: 'https://www.youtube.com/watch?v=6rPwb7DcjrY&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'خ',
            final: 'ـخ',
            medial: 'ـخـ',
            initial: 'خـ',
        },
    },
    {
        id: 33,
        ipa: '[ɣ]',
        name: 'Xeyn',
        latinSymbol: 'ẍ',
        englishApproximation:
            '<p><strong>go</strong>, but without completely blocking airflow on the <strong>g</strong></p>',
        insta: 'https://www.instagram.com/p/CC5z6IXnuNi/',
        video: 'https://www.youtube.com/watch?v=VQ-ZABkIpC86&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'غ',
            final: 'ـغ',
            medial: 'ـغـ',
            initial: 'غـ',
        },
    },
    {
        id: 34,
        ipa: '[z]',
        latinSymbol: 'z',
        name: 'Ze',
        englishApproximation: '<p><strong>z</strong>ap</p>',
        insta: 'https://www.instagram.com/p/CC2lQrln9Pa/',
        video: 'https://www.youtube.com/watch?v=275ORJTIJSQ&t=7s',
        vowel: false,
        arabic: true,
        persian: true,
        variants: {
            isolated: 'ز',
            final: 'ـز',
            medial: 'ـز',
            initial: 'ز',
        },
    },
];

export const words: Word[] = [
    {
        id: 1,
        sorani: 'ئاو',
        english: 'water',
        ipa: '',
    },
    {
        id: 2,
        sorani: 'بزن',
        english: 'goat',
        ipa: '',
    },
    {
        id: 3,
        sorani: 'جووت',
        english: 'pair',
        ipa: '',
    },
    {
        id: 4,
        sorani: 'چونکە',
        english: 'because',
        ipa: '',
    },
];
