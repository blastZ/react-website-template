import React, { Component } from 'react'

class Recruitment extends Component {
    state = {
        recruitments: [
            {
                title: '算法工程师/实习生',
                bodyOne: [
                    '负责计算机视觉和深度学习基本算法的开发与性能提升',
                    '推动计算机视觉算法和深度学习在众多实际应用领域的性能优化和落地'
                ],
                bodyTwo: [
                    '熟练掌握机器学习和计算机视觉的基本方法',
                    '优秀的分析问题和解决问题的能力，对解决具有挑战性的问题充满激情',
                    '较强的算法实现能力，熟练掌握 C/C++ 编程，熟悉 Python/Matlab 编程',
                    '有计算机视觉、深度学习、图形图像处理相关研发经验者优先'
                ]
            },
            {
                title: '软件工程师/实习生',
                bodyOne: [
                    '负责算法产品的开发、优化和维护',
                    '开发和实现新算法，负责研究代码的工程化、封装、优化、测试等工作',
                    '基于产品需求和行业用户场景，进行技术方案设计、整合及实现'
                ],
                bodyTwo: [
                    '熟练掌握 C/C++，具有良好代码风格和质量意识',
                    '掌握图像/视频的基本处理方法',
                    '责任心强，有良好的沟通和团队意识'
                ]
            },
            {
                title: '测试工程师/实习生',
                bodyOne: [
                    '负责公司各类型产品的测试',
                    '根据产品和项目需求，制定测试计划和方案，编写测试用例和测试报告',
                    '对测试中发现的问题进行分析和定位，与开发人员讨论缺陷解决方案',
                    '参与自动化测试工具的开发和环境的搭建，优化测试流程，改进分析方法和评测指标',
                    '为业务部门提供相应技术支持，确保软件质量指标'
                ],
                bodyTwo: [
                    '具有相关领域开发基础：Linux 平台及 C/C++，或 Android 平台及 Java 语言，或 Web开发，或 C#开发',
                    '有相关领域测试经验者优先',
                    '有机器学习和图像处理经验者优先',
                    '善于沟通，责任心强，有良好的学习能力及团队合作精神'
                ]
            },
            {
                title: '技术支持/实习生',
                bodyOne: [
                    '整理产品技术相关文档',
                    '解答、解决客户遇到的技术及使用问题',
                    '对客户进行产品培训，指导正确使用各产品',
                    '整理客户对产品技术的反馈并与产品研发沟通优化产品功能及性能'
                ],
                bodyTwo: [
                    '有良好的敬业精神，具备良好的独立工作能力与客户服务意识',
                    '对新技术和新业务有较强的学习能力',
                    '有 Android、iOS、C++项目经验者优先'
                ]
            },
            {
                title: '行政助理',
                bodyOne: [
                    '参与团队文化建设类活动的策划、组织、执行等',
                    '协助开展各类外联事务，以及与外部合作伙伴的日常沟通与维护',
                    '负责公司相关政府资质申请的组织、统筹和材料提交',
                    '负责公司日常办公用品或设备的采购与管理，合理使用，降低材料消耗',
                    '负责公司内外部来客的接待和后勤保障',
                    '协助公司行政类规章制度的起草、修订以及具体的监督执行',
                    '完成上级领导交办的其他行政事务工作'
                ],
                bodyTwo: [
                    '熟悉办公室行政管理知识及工作流程，熟练运用 Office、Photoshop、Excel 等办公软件',
                    '具有较扎实的文字功底和写作能力',
                    '具有较强的沟通、协调和组织能力',
                    '工作仔细认真、责任心强、积极进取，为人正直，富有较强的自我驱动能力'
                ]
            }
        ]
    }
    render() {
        return (
            <div className="bgimg-4">
                <div className="w3-center flex-box w3-container" style={{width: '100%', height: '300px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 className="w3-text-white w3-wide">码全科技招聘信息</h1>
                </div>
                <div className="w3-content w3-padding-64">{
                    this.state.recruitments.map((recruitment, index) => (
                        <div key={recruitment.title + index} className={`w3-row w3-card-4 w3-round w3-text-white wb-blue ${index === 0 ? null : 'wb-margin-top-64'}`} style={{position: 'relative'}}>
                           <h2 className="w3-row black-blue" style={{margin: '0', padding: '32px'}}>{recruitment.title}</h2>
                           <div className="w3-container" style={{paddingLeft: '64px', paddingTop: '32px', paddingBottom: '80px'}}>
                               <h3>工作职责</h3>
                               <ol>{
                                   recruitment.bodyOne.map((body) => (
                                       <li key={body}>{body}</li>
                                   ))
                               }</ol>
                               <h3>任职资格</h3>
                               <ol>{
                                   recruitment.bodyTwo.map((body) => (
                                       <li key={body}>{body}</li>
                                   ))
                               }</ol>
                           </div>
                        </div>
                    ))
                }</div>
            </div>
        )
    }
}

export default Recruitment;
