--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: gluten; Type: TABLE; Schema: public; Owner: deeannkendrick
--

CREATE TABLE gluten (
    id integer NOT NULL,
    ingredient character varying,
    contain_gluten character varying
);


ALTER TABLE gluten OWNER TO deeannkendrick;

--
-- Name: gluten_id_seq; Type: SEQUENCE; Schema: public; Owner: deeannkendrick
--

CREATE SEQUENCE gluten_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE gluten_id_seq OWNER TO deeannkendrick;

--
-- Name: gluten_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: deeannkendrick
--

ALTER SEQUENCE gluten_id_seq OWNED BY gluten.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: deeannkendrick
--

CREATE TABLE products (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE products OWNER TO deeannkendrick;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: deeannkendrick
--

CREATE SEQUENCE products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_id_seq OWNER TO deeannkendrick;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: deeannkendrick
--

ALTER SEQUENCE products_id_seq OWNED BY products.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: deeannkendrick
--

ALTER TABLE ONLY gluten ALTER COLUMN id SET DEFAULT nextval('gluten_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: deeannkendrick
--

ALTER TABLE ONLY products ALTER COLUMN id SET DEFAULT nextval('products_id_seq'::regclass);


--
-- Data for Name: gluten; Type: TABLE DATA; Schema: public; Owner: deeannkendrick
--

COPY gluten (id, ingredient, contain_gluten) FROM stdin;
1	wheat	g
2	barley	g
3	rye	g
4	breading	g
5	bread stuffing	g
6	brewer's yeast	g
7	buglur	g
8	durum	g
9	farro	g
10	faro	g
11	spelt	g
12	dinkel	g
13	graham flour	g
14	hydrolyzed wheat protien	g
15	wheat protien	g
16	kamut	g
17	malt	g
18	malt vinegar	g
19	soy sauce	g
20	malted milk	g
21	matzo	g
22	matzo meal	g
23	modified wheat starch	g
24	wheat starch	g
25	rye flour	g
26	seitan	g
27	semolina	g
28	triticale	g
29	wheat bran	g
30	wheat flour	g
31	wheat germ	g
32	atta	g
33	chapati flour	g
34	einkorn	g
35	emmer	g
36	farina	g
37	fu	g
38	wasabi	g
39	triticum vulgare	g
40	hordeum vulgare	g
41	secale cerale	g
42	triticum spelta	g
43	teryaki	g
44	maltodextrin	m
45	dextrin	m
46	modified starch	m
47	modified food starch	m
48	natural flavor	m
49	artificial flavor	m
50	worcestershire sauce	m
51	oats	m
52	wheat grass	g
53	oat grass	m
54	barley grass	g
55	rye grass	g
56	msg	m
57	artificial colors	m
58	miso	m
59	baking powder	m
61	textured vegetable protein	m
62	hydrolyzed plant protein	m
63	hydrolyzed vegetable protein	m
64	hydrogenated starch hydrolysate	m
65	hydroxypropylated starch	m
66	pregelatinized starch	m
67	vegetable gum	m
68	vegetable protein	m
69	extender	m
70	binder	m
71	maltrose	m
72	natural colors	m
73	malted barley flour	g
74	unbleached wheat flour	g
75	barley malt extract	g
76	whole grain wheat	g
\.


--
-- Name: gluten_id_seq; Type: SEQUENCE SET; Schema: public; Owner: deeannkendrick
--

SELECT pg_catalog.setval('gluten_id_seq', 77, true);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: deeannkendrick
--

COPY products (id, name) FROM stdin;
1	bouillon cubes
2	candy
3	canned soups
4	cheese spreads
5	processed cheese
6	cold cut/deli meat
7	hot dogs
8	sausages
9	dip mixes
10	dry mixes
11	honey hams
12	instant teas
13	instant coffees
14	condiments
16	sour cream
17	french fries
18	gravies
19	ice cream
20	seasonings
\.


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: deeannkendrick
--

SELECT pg_catalog.setval('products_id_seq', 58, true);


--
-- Name: gluten_pkey; Type: CONSTRAINT; Schema: public; Owner: deeannkendrick
--

ALTER TABLE ONLY gluten
    ADD CONSTRAINT gluten_pkey PRIMARY KEY (id);


--
-- Name: products_name_key; Type: CONSTRAINT; Schema: public; Owner: deeannkendrick
--

ALTER TABLE ONLY products
    ADD CONSTRAINT products_name_key UNIQUE (name);


--
-- Name: products_pkey; Type: CONSTRAINT; Schema: public; Owner: deeannkendrick
--

ALTER TABLE ONLY products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

