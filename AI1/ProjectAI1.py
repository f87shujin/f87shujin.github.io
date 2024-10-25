import streamlit as st
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the data
url = 'https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data'
column_names = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 
                'exang', 'oldpeak', 'slope', 'ca', 'thal', 'target']
df = pd.read_csv(url, header=None, names=column_names)

# Set up the Streamlit app layout
st.title("Analyse des données sur les maladies cardiaques")

# Distribution de l'âge des individus
st.header("Distribution de l'âge des individus")
col1, col2 = st.columns([4, 2])

with col2:
    st.markdown("### Commentaire")
    st.write("La distribution de l'âge montre la répartition des âges des individus dans le jeu de données. On observe que la majorité des individus sont âgés de 40 à 60 ans.")

with col1:
    fig_age, ax_age = plt.subplots()
    sns.histplot(df['age'], kde=True, ax=ax_age)
    ax_age.set_title("Distribution de l'âge")
    st.pyplot(fig_age)

# Différence dans la présence de maladie cardiaque entre les sexes
st.header("Présence de maladie cardiaque entre les sexes")
col1, col2 = st.columns([4, 2])

with col2:
    st.markdown("### Commentaire")
    st.write("La présence de maladie cardiaque semble être plus fréquente chez les hommes que chez les femmes dans ce jeu de données.")

with col1:
    fig_sex, ax_sex = plt.subplots()
    sns.countplot(x='sex', hue='target', data=df, ax=ax_sex)
    ax_sex.set_title("Présence de maladie cardiaque par sexe")
    ax_sex.set_xlabel("Sexe (0 = Femme, 1 = Homme)")
    ax_sex.set_ylabel("Nombre d'individus")
    st.pyplot(fig_sex)

# Relation entre le type de douleur thoracique (cp) et la présence de maladie cardiaque (target)
st.header("Relation entre le type de douleur thoracique et la maladie cardiaque")
col1, col2 = st.columns([4, 2])

with col2:
    st.markdown("### Commentaire")
    st.write("Le type de douleur thoracique semble être lié à la présence de maladie cardiaque. Les individus présentant un type de douleur thoracique 2 (angine atypique) ont une plus faible incidence de maladie cardiaque.")

with col1:
    fig_cp, ax_cp = plt.subplots()
    sns.countplot(x='cp', hue='target', data=df, ax=ax_cp)
    ax_cp.set_title("Type de douleur thoracique par présence de maladie cardiaque")
    ax_cp.set_xlabel("Type de douleur thoracique (cp)")
    ax_cp.set_ylabel("Nombre d'individus")
    st.pyplot(fig_cp)

# Valeurs moyennes de trestbps, chol et thalach pour les individus avec et sans maladie cardiaque
st.header("Valeurs moyennes pour les individus avec et sans maladie cardiaque")
col1, col2 = st.columns([4, 2])

with col2:
    st.markdown("### Commentaire")
    st.write("Les valeurs moyennes de la pression artérielle au repos, du cholestérol et de la fréquence cardiaque maximale montrent des différences entre les individus avec et sans maladie cardiaque.")

with col1:
    mean_values = df.groupby('target')[['trestbps', 'chol', 'thalach']].mean().reset_index()
    st.write(mean_values)

# Association entre la glycémie à jeun au-dessus de 120 mg/dl (fbs) et la maladie cardiaque
st.header("Association entre la glycémie à jeun et la maladie cardiaque")
col1, col2 = st.columns([4, 2])

with col2:
    st.markdown("### Commentaire")
    st.write("La glycémie à jeun au-dessus de 120 mg/dl ne semble pas être fortement associée à une présence accrue de maladie cardiaque dans ce jeu de données.")

with col1:
    fig_fbs, ax_fbs = plt.subplots()
    sns.countplot(x='fbs', hue='target', data=df, ax=ax_fbs)
    ax_fbs.set_title("Glycémie à jeun par présence de maladie cardiaque")
    ax_fbs.set_xlabel("Glycémie à jeun > 120 mg/dl (fbs)")
    ax_fbs.set_ylabel("Nombre d'individus")
    st.pyplot(fig_fbs)
