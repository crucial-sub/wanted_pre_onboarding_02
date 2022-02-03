import React from "react";

import OnOffButton from "layout/OnOffButton";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";

const ID_5 = "id5";

function ProvideCard() {
  return (
    <SectionWrapper>
      <SectionHeader children="기타 설정"></SectionHeader>
      <SectionBody>
        <ContentBodyTitle children="감사카드 제공"></ContentBodyTitle>
        <SectionBodyContent>
          <OnOffButton id={ID_5} />
        </SectionBodyContent>
      </SectionBody>
    </SectionWrapper>
  );
}

export default ProvideCard;
