--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: album; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.album (
    id integer NOT NULL,
    album_title text NOT NULL,
    artist character varying(4),
    release_year integer NOT NULL,
    length time without time zone NOT NULL,
    genre integer NOT NULL,
    tracks integer NOT NULL,
    cowriter character varying(4),
    is_ep boolean NOT NULL,
    is_mixtape boolean NOT NULL
);


--
-- Name: album_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.album_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: album_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.album_id_seq OWNED BY public.album.id;


--
-- Name: artist; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artist (
    id character varying(4) NOT NULL,
    artist_name text NOT NULL,
    genre_id integer NOT NULL
);


--
-- Name: genre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genre (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: genre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genre_id_seq OWNED BY public.genre.id;


--
-- Name: album id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album ALTER COLUMN id SET DEFAULT nextval('public.album_id_seq'::regclass);


--
-- Name: genre id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre ALTER COLUMN id SET DEFAULT nextval('public.genre_id_seq'::regclass);


--
-- Data for Name: album; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.album (id, album_title, artist, release_year, length, genre, tracks, cowriter, is_ep, is_mixtape) FROM stdin;
1	Illmatic	NAS	1994	00:39:51	2	10		f	f
2	The Blueprint	JAYZ	2001	01:03:25	2	15		f	f
3	The Experience	LIKE	2020	00:25:29	5	7		t	f
4	Doggy Style	DOG	1993	00:52:29	1	19		f	f
5	Victory Lap	NIP	2018	01:05:30	1	16		f	f
6	Baduizm	BADU	1997	00:58:15	4	20		f	f
7	Distant Relatives	GONG	2010	01:01:48	5	14	NAS	f	f
8	Who Is Jill Scott Words and Sounds Vol 1	JILL	2000	01:12:59	4	18		f	f
9	Dedication 2	LIL	2006	01:21:07	3	25		f	t
10	Paper Trail	TIP	2008	01:13:17	3	18		f	f
11	It Was Written	NAS	1996	00:58:29	2	15		f	f
\.


--
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.artist (id, artist_name, genre_id) FROM stdin;
NAS	Nasty Nas	2
JAYZ	Jigga Jayz	2
DOG	Snoop Dog	1
NIP	Nipsey Hustle	1
LIL	Lil Wayne	3
TIP	TI	3
BADU	Eykah Badu	4
JILL	Jill Scott	4
LIKE	Lila Ike	5
GONG	Damien Marley	5
\.


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.genre (id, name) FROM stdin;
1	West Coast
2	East Coast
3	Down South
4	Neo Soul
5	Reggae
\.


--
-- Name: album_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.album_id_seq', 11, true);


--
-- Name: genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genre_id_seq', 5, true);


--
-- Name: album album_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (id);


--
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);


--
-- Name: genre genre_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (id);


--
-- Name: album fk_artist; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT fk_artist FOREIGN KEY (artist) REFERENCES public.artist(id);


--
-- Name: artist fk_genre; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES public.genre(id);


--
-- Name: album fk_genre; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT fk_genre FOREIGN KEY (genre) REFERENCES public.genre(id);


--
-- PostgreSQL database dump complete
--

